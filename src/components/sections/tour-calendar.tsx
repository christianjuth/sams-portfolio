"use client";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import ICAL from "ical.js";
import { useEffect, useState } from "react";
import { Button } from "../ui";
import _ from "lodash";
import { cn } from "@/lib/cn";
import getUrls from "get-urls";

dayjs.extend(localizedFormat);

function proxyFetch(url: string) {
  return Promise.any([
    (async () => {
      const res = await fetch(
        `https://thingproxy.freeboard.io/fetch/${encodeURIComponent(url)}`,
      );
      return await res.text();
    })(),
    (async () => {
      const res = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      );
      return await res.text();
    })(),
    (async () => {
      const res = await fetch(`https://whateverorigin.org/get?url=${url}`);
      const json = await res.json();
      if (_.isObject(json) && "contents" in json && _.isString(json.contents)) {
        return json.contents;
      }
      throw new Error("failed to parse text response");
    })(),
  ]);
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
  const [events, setEvents] = useState<ICAL.Event[]>([]);

  const hiddenEvents = events.length - maxEvents;

  useEffect(() => {
    async function loadCal() {
      const icsText = await proxyFetch(icalUrl);
      const jcalData = ICAL.parse(icsText);
      const comp = new ICAL.Component(jcalData);
      const vevents = comp.getAllSubcomponents("vevent");
      setEvents(
        vevents
          .map((vevent) => new ICAL.Event(vevent))
          .filter((event) => {
            const startDate = dayjs(event.startDate.toJSDate());
            return !startDate.isBefore(today, "day");
          })
          .sort((a, b) =>
            a.startDate.toString().localeCompare(b.startDate.toString()),
          ),
      );
    }
    loadCal();
  }, [icalUrl]);

  return (
    <div className="bg-black p-6">
      <h2 className="font-bold text-3xl mb-4">{title}</h2>

      <div className="divide-y divide-white/20">
        {events.slice(0, maxEvents).map((event) => {
          const startDate = dayjs(event.startDate.toJSDate());
          const endDate = dayjs(event.endDate.toJSDate());
          const isSameDate = startDate.isSame(endDate, "day");
          const summaryLowerCased = event.summary.toLowerCase();
          const isCanceled =
            summaryLowerCased.includes("canceled") ||
            summaryLowerCased.includes("cancelled");
          const urls = event.description ? getUrls(event.description) : null;
          const firstUrl = urls?.values().toArray()[0];
          const isTicketUrl = firstUrl?.toLowerCase().includes("ticket");
          return (
            <div
              key={event.uid}
              className={cn(
                "py-5 flex flex-col md:flex-row md:items-center justify-between gap-3",
                isCanceled && "line-through",
              )}
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">
                  {startDate.format("lll")}
                  {" - "}
                  {isSameDate
                    ? endDate.format("h:mm A")
                    : endDate.format("lll")}
                </span>
                <span className="font-medium">{event.summary}</span>
                {event.description && (
                  <div
                    className="prose prose-invert text-sm italic"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                )}
                <span className="text-sm text-gray-400">{event.location}</span>
              </div>
              <div className="flex flex-row md:flex-col gap-2">
                {firstUrl && (
                  <Button className="py-1.5" href={firstUrl} targetBlank>
                    {isTicketUrl ? "Tickets" : "Link"}
                  </Button>
                )}
                {event.location && (
                  <Button
                    className="py-1.5"
                    href={`https://www.google.com/maps?q=${event.location}`}
                    targetBlank
                  >
                    Directions
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {hiddenEvents > 0 && (
        <Button className="py-1.5 px-3 mt-4" onClick={() => setMaxEvents(9999)}>
          show {hiddenEvents} more event{hiddenEvents > 1 && "s"}
        </Button>
      )}
    </div>
  );
}
