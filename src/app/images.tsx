"use client";

import { Slide } from "react-slideshow-image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image'

export function Images() {
  const images = [
    "/slide-1.png",
    "/slide-2.png",
    "/slide-3.png",
    "/slide-4.png",
  ];

  return (
    <div className="-mx-2">
      <Slide
        arrows
        slidesToShow={2}
        transitionDuration={300}
        infinite
        indicators
        prevArrow={<FaChevronLeft className="ml-4 text-3xl" />}
        nextArrow={<FaChevronRight className="mr-4 text-3xl" />}
      >
        {images.map(img => (
          <div key={img} className="aspect-square flex items-center content-center bg-cover relative mx-2">
            <Image src={img} alt="" fill />
          </div>
        ))}
      </Slide>
    </div>
  );
}
