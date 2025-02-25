import { twMerge } from 'tailwind-merge'

import { ImageSlider } from "@/components/sections/images";
import { AudioPlayer } from "@/components/sections/audio-player";
import { BackgroundImage } from "@/components/sections/background-image";
import { YouTubeSection } from "@/components/sections/youtube-embed";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Bio } from "@/components/sections/bio";

import Link from 'next/link';

function Section({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={twMerge("relative max-w-7xl w-full mx-auto mb-20 md:mb-32 px-6", className)}>
      {children}
    </section>
  )
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
          <YouTubeSection videoId="-k0XST5khaA" />
        </Section>

        <Section>
          <Bio
            image="/about.png" title="Samantha Dress"
            bio={[
              "Lorem ipsum odor amet, consectetuer adipiscing elit.Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin.Mi aenean quis in ornare faucibus elementum pellentesque.Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent ? Ornare tellus sed, primis eros faucibus urna.Eu id feugiat aliquet ultricies amet libero.",
              "Lorem ipsum odor amet, consectetuer adipiscing elit.Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin.Mi aenean quis in ornare faucibus elementum pellentesque.Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent ? Ornare tellus sed, primis eros faucibus urna.Eu id feugiat aliquet ultricies amet libero.",
              "Lorem ipsum odor amet, consectetuer adipiscing elit.Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin.Mi aenean quis in ornare faucibus elementum pellentesque.Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent ? Ornare tellus sed, primis eros faucibus urna.Eu id feugiat aliquet ultricies amet libero.",
            ]}
          />
        </Section>

        <Section>
          <AudioPlayer playlist={[
            {
              src:
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
              title: "Song 1",
              artist: "Samantha Dress"
            },
            {
              src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
              title: "Song 2",
              artist: "Samantha Dress"
            },
            {
              src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
              title: "Song 3",
              artist: "Samantha Dress"
            }
          ]} />
        </Section>

        <Section>
          <ImageSlider images={[
            "/slide-3.png",
            "/slide-4.png",
            "/slide-1.png",
            "/slide-2.png",
          ]} />
          <Link href="/photos" className="text-center block pt-3">
            View all photos
          </Link>
        </Section>
      </div>

      <div className="bg-black/90 backdrop-blur-xl py-32 relative" id="book">
        <Section>
          <ContactForm email="hi@samanhadress.com" />
        </Section>
      </div>
    </>
  )
}
