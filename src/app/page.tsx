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
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={twMerge(
        "relative max-w-7xl w-full mx-auto mb-20 md:mb-32 px-6",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <>
      <BackgroundImage src="/hero.png" />

      <div className="flex flex-col relative">
        <Section className="mb-0 md:mb-0">
          <Hero
            title="SAMANTHA DRESS"
            blurb="singer • songwriter • instrumentalist • performer • producer • music educator"
            facebook="https://www.facebook.com/sam.laubach.music/"
            instagram="https://www.instagram.com/_samanthadress"
            bookCta="BOOK NOW"
            upcomingEventsCta="UPCOMING EVENTS"
          />
        </Section>

        <Section>
          <SpotifyEmbed />
        </Section>

        <Section>
          <YouTubeSection videoId="TWvw9aOVJa4" />
        </Section>

        <Section>
          <Bio
            image="/about.png"
            title="SAMANTHA DRESS"
            bio={[
              "Performing under the stage name Samantha Dress, a heartfelt tribute to her late mother, Susan Dress, Samantha first stepped to the mic at age eleven fronting the Jody Joseph Band at the Stone Pony, where she then performed annually. By her teens she became an official member of the band as a background vocalist, further developing her ear for harmony and ability to collaborate with musicians of all backgrounds, at venues throughout New Jersey.",
              "At eighteen, Sam launched her solo acoustic act (formerly “Sam Jams”) in the Long Beach Island area. Based in Asbury Park, she’s a familiar face in Ocean and Monmouth county circuits, with highlights in Puerto Rico, and Manhattan’s West Village piano bars (The Monster and Stonewall Inn).",
              "A lifelong musician, Samantha began taking piano and voice lessons early on while teaching herself guitar, with guidance from her dad. She holds a B.A. in Music from Rutgers’ Mason Gross School of the Arts, where she trained classically and networked with various musicians, some of whom she calls best friends and bandmates. She continues to share her musical passion and knowledge as a public school music teacher.",
              "She also has a long history of choral singing from elementary school to college. As a member of the Rutgers Kirkpatrick Choir, Sam shared unique opportunities like performing alongside a professional orchestra at Carnegie Hall, and backing up the Eagles during their Hotel California Tour ‘23 at the Prudential Center.",
              "Samantha has been songwriting and recording since her teens, but has only recently begun releasing songs into the world. Whether the spark ignites in her journal, on a guitar, or at a piano, she leads with vulnerability through her songwriting.",
              "Onstage, Sam is energetic and authentic. She might juggle in between songs, pop into a handstand, or solve a Rubik’s Cube while the band vamps. This playfulness is anchored by serious musicianship. Lead by her voice, she moves between guitar, piano, ukulele, and sometimes flute, layering colors that keep each set fresh and exciting for any audience.",
              "Key Vocal Influences: Etta James, Amy Winehouse, Alanis Morissette, Brandi Carlile, Janis Joplin, Lizzy McAlpine, Yebba, Olivia Dean, Remi Wolf…",
              "Live Configurations: solo acoustic act; duo act (The Roomies & other duo collaborations); full‑band shows",
            ]}
          />
        </Section>

        <Section>
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
            email="***REMOVED***"
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
          <h2 className="text-xl block mb-6">other projects</h2>

          <div className="max-w-xs flex flex-col items-center gap-2">
            <Image src={TheRoomies} alt="The Roomies" />
            <div className="flex flex-row gap-2 items-center text-2xl">
              <ExternalLink href="https://www.youtube.com/@theroomies387/featured">
                <FaYoutube />
              </ExternalLink>
              |
              <ExternalLink href="https://www.instagram.com/theroomiesduo">
                <FaInstagram />
              </ExternalLink>
              |
              <ExternalLink href="https://www.facebook.com/theroomiesduo">
                <FaFacebook />
              </ExternalLink>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
