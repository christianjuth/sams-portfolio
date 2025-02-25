import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import 'react-slideshow-image/dist/styles.css'
import { Images } from "./images";
import Image from "next/image"

function YouTubeSection({ videoId }: { videoId: string }) {
  return (
    <iframe className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${videoId}`} />
  )
}

function Input(props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input {...props} className={`p-2 text-black ${props.className}`} />
  )
}

function TextArea(props: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return (
    <textarea {...props} className={`p-2 text-black ${props.className}`} />
  )
}

function Button({ children, href, type, ...props }: {
  children: React.ReactNode,
  href?: string
  type?: "submit"
  className?: string
}) {
  const className = `border border-white p-4 text-center ${props.className}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} type={type}>{children}</button>
  )
}

function Section({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`${className} relative max-w-7xl w-full mx-auto mb-32 px-6`}>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="sticky top-0 h-[100vh]">
          <Image src="/hero.png" fill alt="" className="object-cover object-left" />
        </div>

        <Section className="-mt-[100vh] mb-0">
          <div className="flex flex-col gap-14 md:items-center justify-center min-h-[100svh] mx-auto relative">
            <div className="flex flex-row gap-4 text-4xl">
              <FaFacebook />
              <FaInstagram />
              <FaSpotify />
            </div>

            <h1 className="text-6xl font-black">SAMANTHA DRESS</h1>

            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <Button href="mailto:hi@samanthadress.com" className="w-full">Book Now</Button>
          </div>
        </Section>

        <Section>
          <YouTubeSection videoId="-k0XST5khaA" />
        </Section>

        <Section>
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 aspect-square relative">
              <Image src="/about.png" fill alt="" className="object-cover object-left" />
            </div>

            <div className="flex flex-col gap-4 justify-center bg-black/45 p-6 backdrop-blur-md leading-7">
              <h2 className="font-bold text-3xl">Samantha Dress</h2>

              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin. Mi aenean quis in ornare faucibus elementum pellentesque. Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent? Ornare tellus sed, primis eros faucibus urna. Eu id feugiat aliquet ultricies amet libero.
              </p>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin. Mi aenean quis in ornare faucibus elementum pellentesque. Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent? Ornare tellus sed, primis eros faucibus urna. Eu id feugiat aliquet ultricies amet libero.
              </p>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Condimentum bibendum iaculis commodo himenaeos egestas habitant cras proin. Mi aenean quis in ornare faucibus elementum pellentesque. Sollicitudin dui dui primis feugiat scelerisque vivamus praesent torquent? Ornare tellus sed, primis eros faucibus urna. Eu id feugiat aliquet ultricies amet libero.
              </p>
            </div>
          </section>
        </Section>

        <Section>
          <YouTubeSection videoId="-k0XST5khaA" />
        </Section>

        <Section>
          <Images />
        </Section>
      </div>

      <div className="bg-black py-32 relative">
        <Section className="gap-4 flex flex-col bg-black">
          <h2 className="text-3xl font-black">BOOKING</h2>

          <form action="https://formsubmit.co/hi@samanhadress.com" method="POST" className="flex flex-col gap-1">
            <label>Name</label>
            <Input type="text" name="name" required />

            <br />
            <label>Email</label>
            <Input type="email" name="email" required />

            <br />
            <label>Message</label>
            <TextArea name="message" placeholder="Book Sammantha" />

            <br />
            <Button type="submit">Submit</Button>
          </form>
        </Section>
      </div>
    </>
  )
}
