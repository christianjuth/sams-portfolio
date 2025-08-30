import { twMerge } from "tailwind-merge";
import Image from "next/image";

import TheRoomies from "@/../public/the-roomies.jpeg";

import { ImageSlider } from "@/components/sections/images";
import { BackgroundImage } from "@/components/sections/background-image";
import { YouTubeSection } from "@/components/sections/youtube-embed";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Bio } from "@/components/sections/bio";

import Link from "next/link";
import { ExternalLink } from "@/components/ui";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { TourCalendar } from "@/components/sections/tour-calendar";
import { config } from "./config";

function SpotifyEmbed() {
  return (
    <iframe
      src="https://open.spotify.com/embed/track/1AwVF0lSMwlru3CE1K3cqQ?utm_source=generator"
      className="h-[152px] md:h-[232px] w-full bg-[#90180f]"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

function Section({
  children,
  className,
  id,
  as = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "header",
}) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={twMerge(
        "relative max-w-7xl w-full mx-auto mb-20 md:mb-32 px-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default function Page() {
  return (
    <>
      <BackgroundImage src="/hero.png" />

      <div className="flex flex-col relative">
        <Section className="mb-0 md:mb-0" as="header">
          <Hero
            title="SAMANTHA DRESS"
            blurb="singer • songwriter • instrumentalist • performer • producer • music educator"
            facebook={config.facebook}
            instagram={config.instagram}
            spotify={config.spotify}
            appleMusic={config.appleMusic}
            bookCta="BOOK NOW"
            upcomingEventsCta="UPCOMING EVENTS"
          />
        </Section>

        <Section>
          <h2 className="sr-only">Listen to latest Spotify release</h2>
          <SpotifyEmbed />
        </Section>

        <Section>
          <h2 className="sr-only">Watch performance</h2>
          <YouTubeSection videoId="TWvw9aOVJa4" />
        </Section>

        <Section>
          <Bio
            image="/about.png"
            title="SAMANTHA DRESS"
            bio={[
              'A dynamic vocalist who ignites through vulnerability, Samantha Dress emphasizes a playful commitment to total authenticity, anchored in serious musicianship.',
              'Adopting the stage surname Dress in a heartfelt tribute to her late mother, Susan Dress, she’s come a long way since first taking the stage at the iconic Stone Pony at just 11 years old. ',
              'A lifelong musician, Dress is a classically trained vocalist & pianist as well as a self-taught guitarist. She moves fluidly between piano, keys, ukulele & occasionally flute.',
              'As a vocalist in the Rutgers Kirkpatrick Choir, Samantha has shared the stage with orchestras at Carnegie Hall as well as classic rock legends The Eagles during their Hotel California Tour.',
              'She holds a B.A. in Music Education from Rutgers’ Mason Gross School of the Arts. She teaches music by day & performs in piano bars & clubs by night. ',
              'Her sprawling influences include vocal giants like Etta James, Janis Joplin, Amy Winehouse, Alanis Morissette & Yebba; folk writers Brandi Carlisle & Lizzy McAlpine, plus contemporary indie pop/soul artists like Remi Wolf & Olivia Dean.',
              'She blends these influences into her own distinct style, employing a tasteful variety of instrumentation & live layering for a full sound, even solo, & always writing from the rawness of experience.Stream her debut single, “Between the Lines,” out now, & follow her on Spotify to be the first to hear what’s next.',
            ]}
          />
        </Section>

        <Section>
          <h2 className="sr-only">Headshots</h2>
          <ImageSlider
            images={[
              "/slide-3.png",
              "/slide-4.png",
              "/slide-1.png",
              "/slide-2.png",
              "/slide-5.png",
              "/slide-6.png",
            ]}
          />
          <Link href="/photos" className="text-center block pt-3">
            view all photos
          </Link>
        </Section>

        <Section id="upcoming-events">
          <TourCalendar
            title="UPCOMING SHOWS"
            icalUrl="https://calendar.google.com/calendar/ical/65138dbc87c80e90f51e1ad6850a279be725a04b3a71786550afa5e1c38d63fe%40group.calendar.google.com/public/basic.ics"
            maxEvents={5}
          />
        </Section>
      </div>

      <div className="bg-black/90 backdrop-blur-xl py-32 relative" id="book">
        <Section className="mb-0 md:mb-0">
          <ContactForm
            token="74ad2b6d4195be218a50824cb44cf38e"
            title="BOOK SAM"
            subtitle="solo, duo, or band act offered"
          />
        </Section>
      </div>

      <div
        className="bg-white backdrop-blur-xl py-20 relative text-black"
        id="book"
      >
        <Section className="mb-0 md:mb-0 flex flex-col max-md:items-center">
          <h2 className="text-xl block mb-6 font-heading">other projects</h2>

          <div className="max-w-xs flex flex-col items-center gap-2">
            <Image src={TheRoomies} alt="The Roomies" />
            <div className="flex flex-row gap-2 items-center text-2xl">
              <ExternalLink href="https://www.youtube.com/@theroomies387/featured">
                <FaYoutube aria-label="YouTube" />
              </ExternalLink>
              |
              <ExternalLink href="https://www.instagram.com/theroomiesduo">
                <FaInstagram aria-label="Instagram" />
              </ExternalLink>
              |
              <ExternalLink href="https://www.facebook.com/theroomiesduo">
                <FaFacebook aria-label="Facebook" />
              </ExternalLink>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
