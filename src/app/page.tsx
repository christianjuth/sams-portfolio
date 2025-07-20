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

function SpotifyEmbed() {
  return (
    <iframe
      src="https://open.spotify.com/embed/track/1AwVF0lSMwlru3CE1K3cqQ?utm_source=generator"
      className="h-64 w-full"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
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
            blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            facebook="https://www.facebook.com/sam.laubach.music/"
            instagram="https://www.instagram.com/_samjams"
          />
        </Section>

        <Section>
          <YouTubeSection videoId="TWvw9aOVJa4" />
        </Section>

        <Section>
          <Bio
            image="/about.png"
            title="SAMANTHA DRESS"
            bio={[
              "Lorem ipsum odor amet, consectetuer adipiscing elit.Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin.Mi aenean quis in ornare faucibus elementum pellentesque.Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent ? Ornare tellus sed, primis eros faucibus urna.Eu id feugiat aliquet ultricies amet libero.",
              "Lorem ipsum odor amet, consectetuer adipiscing elit.Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin.Mi aenean quis in ornare faucibus elementum pellentesque.Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent ? Ornare tellus sed, primis eros faucibus urna.Eu id feugiat aliquet ultricies amet libero.",
              "Lorem ipsum odor amet, consectetuer adipiscing elit.Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin.Mi aenean quis in ornare faucibus elementum pellentesque.Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent ? Ornare tellus sed, primis eros faucibus urna.Eu id feugiat aliquet ultricies amet libero.",
            ]}
          />
        </Section>

        <Section>
          <SpotifyEmbed />
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
            View all photos
          </Link>
        </Section>
      </div>

      <div className="bg-black/90 backdrop-blur-xl py-32 relative" id="book">
        <Section className="mb-0 md:mb-0">
          <ContactForm email="hi@samanhadress.com" title="BOOK SAM" />
        </Section>
      </div>

      <div
        className="bg-white backdrop-blur-xl py-20 relative text-black"
        id="book"
      >
        <Section className="mb-0 md:mb-0 flex flex-col max-md:items-center">
          <h2 className="text-xl block mb-6">Other projects</h2>

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
