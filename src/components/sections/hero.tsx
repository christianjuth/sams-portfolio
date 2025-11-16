import { FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { Button, ExternalLink } from "../ui";

export function Hero({
  title,
  blurb,
  upcomingEventsCta = "Upcoming Events",
  bookCta = "Book Now",
  facebook,
  instagram,
  spotify,
  appleMusic,
}: {
  title: string;
  blurb: string;
  bookCta?: string;
  upcomingEventsCta?: string;
  facebook?: string;
  instagram?: string;
  spotify?: string;
  appleMusic?: string;
}) {
  return (
    <div className="flex flex-col gap-14 md:items-center justify-center min-h-[98svh] mx-auto relative">
      <nav className="flex flex-row gap-4 text-4xl" aria-label="Social Media">
        {facebook && (
          <ExternalLink href={facebook}>
            <FaFacebook aria-label="Facebook" className="hover:bg-white hover:text-[#4267B2] transition-colors rounded-full" />
          </ExternalLink>
        )}
        {instagram && (
          <ExternalLink href={instagram}>
            <FaInstagram aria-label="Instagram" className="bg-gradient-to-br hover:from-[#405DE6] hover:via-[#833AB4] hover:to-[#E1306C] transition-all rounded-xl" />
          </ExternalLink>
        )}
        {spotify && (
          <ExternalLink href={spotify}>
            <FaSpotify aria-label="Spotify" className="hover:text-[#1DB954] hover:bg-black transition-colors rounded-full" />
          </ExternalLink>
        )}
        {appleMusic && (
          <ExternalLink href={appleMusic}>
            <SiApplemusic aria-label="Apple Music" className="hover:text-[#FF4E6B] hover:bg-white transition-colors scale-90 rounded-lg" />
          </ExternalLink>
        )}
      </nav>

      <h1 className="text-6xl md:text-7xl font-heading">{title}</h1>

      <h2 className="text-xl text-center">{blurb}</h2>

      <nav className="flex flex-col w-full gap-4" aria-label="Main Call to Action">
        <Button href="#upcoming-events" className="w-full" size="large">
          {upcomingEventsCta}
        </Button>
        <Button href="#book" className="w-full" size="large">
          {bookCta}
        </Button>
      </nav>
    </div>
  );
}
