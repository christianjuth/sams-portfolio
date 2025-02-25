import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import { Button, ExternalLink } from "../ui";

export function Hero({
  title,
  blurb,
  bookCta = "Book Now",
  facebook,
  instagram,
  spotify,
}: {
  title: string,
  blurb: string,
  bookCta?: string
  facebook?: string
  instagram?: string
  spotify?: string
}) {
  return (
    <div className="flex flex-col gap-14 md:items-center justify-center min-h-[100svh] mx-auto relative">
      <div className="flex flex-row gap-4 text-4xl">
        {facebook && <ExternalLink href={facebook}>
          <FaFacebook />
        </ExternalLink>}
        {instagram && <ExternalLink href={instagram}>
          <FaInstagram />
        </ExternalLink>}
        {spotify && <ExternalLink href={spotify}>
          <FaSpotify />
        </ExternalLink>}
      </div>

      <h1 className="text-6xl md:text-7xl">
        {title}
      </h1>

      <p className="text-lg text-center">
        {blurb}
      </p>

      <Button href="#book" className="w-full">{bookCta}</Button>
    </div>
  )
}
