"use client";

import 'react-slideshow-image/dist/styles.css'

import { Slide } from "react-slideshow-image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image'
import { useBreakpoint } from "@/lib/hooks";

export function ImageSlider({
  images
}: {
  images: string[]
}) {
  const breakpoint = useBreakpoint();

  return (
    <div className="-mx-2 select-none">
      <Slide
        arrows
        slidesToShow={breakpoint.md ? 2 : 1}
        transitionDuration={300}
        infinite
        prevArrow={<FaChevronLeft className="md:ml-4 text-3xl" />}
        nextArrow={<FaChevronRight className="md:mr-4 text-3xl" />}
      >
        {images.map(img => (
          <div key={img} className="aspect-square flex items-center content-center bg-cover relative md:mx-3">
            <Image src={img} alt="" fill />
          </div>
        ))}
      </Slide>
    </div>
  );
}
