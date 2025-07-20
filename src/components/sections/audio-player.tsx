"use client";

import { useRef, useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaSpotify, FaPlay, FaPause } from "react-icons/fa";

type Song = {
  src: string;
  title: string;
  artist: string;
};

/**
 * @example
 * <AudioPlayer
 *   playlist={[
 *     {
 *       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
 *       title: "Song 1",
 *       artist: "Samantha Dress",
 *     },
 *     {
 *       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
 *       title: "Song 2",
 *       artist: "Samantha Dress",
 *     },
 *     {
 *       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
 *       title: "Song 3",
 *       artist: "Samantha Dress",
 *     },
 *   ]}
 * />
 */
export function AudioPlayer({ playlist }: { playlist: Song[] }) {
  const ref = useRef<H5AudioPlayer>(null);

  const [playing, setPlaying] = useState(false);

  const [index, setIndex] = useState<number | null>(null);
  const projectedIndex = index ?? 0;

  const handleNext = () => {
    if (projectedIndex < playlist.length - 1) {
      setIndex(projectedIndex + 1);
      requestAnimationFrame(() => {
        ref.current?.audio.current?.play();
      });
    }
  };

  const handlePrev = () => {
    if (projectedIndex > 0) {
      setIndex(projectedIndex - 1);
      requestAnimationFrame(() => {
        ref.current?.audio.current?.play();
      });
    }
  };

  return (
    <div className="flex flex-col bg-neutral-700">
      <div className="grid md:grid-rows-2 grid-cols-2 p-6 bg-neutral-500 max-md:gap-4">
        <div className="md:row-span-2">
          <div className="aspect-square bg-black w-44 rounded-md" />
        </div>
        <div className="flex flex-row justify-end p-2 text-2xl">
          <FaSpotify />
        </div>
        <H5AudioPlayer
          ref={ref}
          src={playlist[projectedIndex]?.src}
          onEnded={handleNext}
          onClickNext={handleNext}
          onClickPrevious={handlePrev}
          onPlay={() => {
            if (!index) {
              setIndex(0);
            }
            setPlaying(true);
          }}
          onPause={() => setPlaying(false)}
          showSkipControls
          showJumpControls={false}
          style={{
            background: "transparent",
            boxShadow: "none",
          }}
          className="md:col-start-2 md:row-start-2 max-md:col-span-2"
        />
      </div>

      <div className="py-2 flex flex-col flex-1">
        {playlist.map(({ src, title, artist }, i) => (
          <button
            key={src}
            onClick={() => {
              if (index === i && playing) {
                requestAnimationFrame(() => {
                  ref.current?.audio.current?.pause();
                });
              } else {
                setIndex(i);
                requestAnimationFrame(() => {
                  ref.current?.audio.current?.play();
                });
              }
            }}
            className="flex flex-row items-center py-2 px-4 gap-4 hover:bg-black/50 transition-colors"
          >
            <span className="text-neutral-400 w-5">
              {index === i ? playing ? <FaPause /> : <FaPlay /> : <>{i + 1}</>}
            </span>
            <div className="flex flex-col text-start">
              <span>{title}</span>
              <span className="text-sm text-neutral-300">{artist}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
