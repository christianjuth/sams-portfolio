"use client";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import ICAL from "ical.js";
import { useMemo, useState } from "react";
import { Button } from "../ui";
import _ from "lodash";
import { cn } from "@/lib/cn";
import getUrls from "get-urls";
import { useQuery } from "@tanstack/react-query";
import z from "zod";
import { ImSpinner8 } from "react-icons/im";
import linkifyHtml from 'linkify-html';

dayjs.extend(localizedFormat);

const whateveroriginSchema = z.object({
  contents: z.string(),
  status: z.object({
    http_code: z.number(),
  }),
});

const icalTextSchema = z.string().refine(
  (text) => {
    const trimmed = text.trim();

    // must start/end correctly
    if (
      !trimmed.startsWith("BEGIN:VCALENDAR") ||
      !trimmed.endsWith("END:VCALENDAR")
    ) {
      return false;
    }

    // must include at least one VERSION: and one PRODID:
    if (!/VERSION:\d+(\.\d+)?/.test(trimmed) || !/PRODID:.+/.test(trimmed)) {
      return false;
    }

    return true;
  },
  {
    message:
      "Invalid iCal format: must start with BEGIN:VCALENDAR, end with END:VCALENDAR, and include VERSION & PRODID",
  },
);

function proxyFetch(url: string) {
  return Promise.any([
    (async () => {
      const res = await fetch(
        `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(url)}`,
      );
      const text = await res.text();
      return icalTextSchema.parse(text);
    })(),
    (async () => {
      const res = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      );
      const text = await res.text();
      return icalTextSchema.parse(text);
    })(),
    (async () => {
      const res = await fetch(`https://whateverorigin.org/get?url=${url}`);
      const json = await res.json();
      const { status, contents } = whateveroriginSchema.parse(json);
      if (status.http_code < 200 || status.http_code >= 300) {
        throw new Error("server error");
      }
      return icalTextSchema.parse(contents);
    })(),
  ]);
}

function useCalendar(icalUrl: string) {
  return useQuery({
    queryKey: ["ical", icalUrl],
    queryFn: () => proxyFetch(icalUrl),
  });
}

const today = dayjs();

export function TourCalendar({
  title,
  icalUrl,
  maxEvents: maxEventsProp,
}: {
  icalUrl: string;
  title: string;
  maxEvents?: number;
}) {
  const [maxEvents, setMaxEvents] = useState(maxEventsProp ?? 9999);

  const query = useCalendar(icalUrl);
  const events: ICAL.Event[] = useMemo(() => {
    const icsText = query.data;

    if (!icsText) {
      return [];
    }

    const jcalData = ICAL.parse(icsText);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents("vevent");

    return vevents
      .map((vevent) => new ICAL.Event(vevent))
      .filter((event) => {
        const startDate = dayjs(event.startDate.toJSDate());
        return !startDate.isBefore(today, "day");
      })
      .sort((a, b) =>
        a.startDate.toString().localeCompare(b.startDate.toString()),
      );
  }, [query.data]);

  const hiddenEvents = events.length - maxEvents;

  return (
    <div className="bg-black p-6">
      <h2 className="font-heading text-3xl mb-4">{title}</h2>

      <div
        className={cn(
          "divide-y divide-white/20 relative",
          query.isPending && "min-h-96",
        )}
      >
        {query.isPending && (
          <ImSpinner8 className="absolute top-1/2 left-1/2 text-3xl animate-spin" />
        )}

        {events.slice(0, maxEvents).map((event) => {
          const startDate = dayjs(event.startDate.toJSDate());
          const endDate = dayjs(event.endDate.toJSDate());
          const isSameDate = startDate.isSame(endDate, "day");
          const isLongerThan12Hours = startDate.diff(endDate, "h") >= 12;
          const isThisYear = startDate.isSame(today, "year");
          const summaryLowerCased = event.summary.toLowerCase();
          const isCanceled =
            summaryLowerCased.includes("canceled") ||
            summaryLowerCased.includes("cancelled");
          const urls = event.description ? getUrls(event.description, { stripWWW: false }) : null;
          const firstUrl = urls?.values().toArray()[0];
          const isTicketUrl = firstUrl?.toLowerCase().includes("ticket");
          const description = (event.description);
          return (
            <article
              key={event.uid}
              className={cn(
                "py-5 flex flex-col md:flex-row md:items-center justify-between gap-3",
                isCanceled && "line-through",
              )}
            >
              <time className="flex justify-between items-center md:flex-col" dateTime={startDate.toISOString()}>
                <span className="text-xl md:w-full font-black">{startDate.format("ddd")}, {startDate.format(isThisYear ? "MMM D" : "MMM D")}</span>
                <span className="text-nowrap font-black md:font-medium">
                  {startDate.format("h:mma")}
                  {"-"}
                  {(!isSameDate && isLongerThan12Hours)
                    ? endDate.format("lll")
                    : endDate.format("h:mma")}
                </span>
              </time>
              <div className="flex flex-col md:items-center md:text-center overflow-hidden gap-2 md:gap-1">
                <h3 className="font-bold md:font-medium text-ellipsis overflow-hidden">
                  {event.summary}
                </h3>
                {description && (
                  <p
                    className="prose prose-sm prose-invert italic text-ellipsis overflow-hidden [&_a]:max-w-sm [&_a]:inline-block [&_a]:overflow-hidden [&_a]:text-nowrap [&_a]:text-ellipsis [&_a]:align-bottom [&_a]:text-[var(--tw-prose-body)]"
                    dangerouslySetInnerHTML={{ __html: linkifyHtml(description, { target: "_blank", rel: "noopener noreferrer", }) }}
                  />
                )}
                <span className="text-sm font-medium text-gray-400 text-ellipsis overflow-hidden">
                  {event.location}
                </span>
              </div>
              <div className="flex flex-row md:flex-col gap-2">
                {firstUrl && (
                  <Button href={firstUrl} targetBlank>
                    {isTicketUrl ? "Tickets" : "Link"}
                  </Button>
                )}
                {event.location && (
                  <Button
                    href={`https://www.google.com/maps?q=${event.location}`}
                    targetBlank
                  >
                    Directions
                  </Button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {hiddenEvents > 0 && (
        <Button className="mt-4" onClick={() => setMaxEvents(9999)}>
          show {hiddenEvents} more event{hiddenEvents > 1 && "s"}
        </Button>
      )}
    </div>
  );
}
