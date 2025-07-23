import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import { Button, ExternalLink } from "../ui";

export function Hero({
  title,
  blurb,
  upcomingEventsCta = "Upcoming Events",
  bookCta = "Book Now",
  facebook,
  instagram,
  spotify,
}: {
  title: string;
  blurb: string;
  bookCta?: string;
  upcomingEventsCta?: string;
  facebook?: string;
  instagram?: string;
  spotify?: string;
}) {
  return (
    <div className="flex flex-col gap-14 md:items-center justify-center min-h-[98svh] mx-auto relative">
      <div className="flex flex-row gap-4 text-4xl">
        {facebook && (
          <ExternalLink href={facebook}>
            <FaFacebook />
          </ExternalLink>
        )}
        {instagram && (
          <ExternalLink href={instagram}>
            <FaInstagram />
          </ExternalLink>
        )}
        {spotify && (
          <ExternalLink href={spotify}>
            <FaSpotify />
          </ExternalLink>
        )}
      </div>

      <h1 className="text-6xl md:text-7xl">{title}</h1>

      <p className="text-xl text-center">{blurb}</p>

      <div className="flex flex-col w-full gap-4">
        <Button href="#upcoming-events" className="w-full">
          {upcomingEventsCta}
        </Button>
        <Button href="#book" className="w-full">
          {bookCta}
        </Button>
      </div>
    </div>
  );
}
