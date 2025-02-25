"use client"

import { useScrollOffset, useWindowHeight } from "@/lib/hooks";
import Image from "next/image"

export function BackgroundImage({
  src
}: {
  src: string
}) {
  const offset = useScrollOffset();
  const windowHeight = useWindowHeight();

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[100lvh]"
    >
      <Image src={src} fill alt="" className="object-cover" priority />

      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: windowHeight === null ? 0 : Math.min((offset / windowHeight) ** 2, 0.3)
        }}
      />
    </div>
  )
}
