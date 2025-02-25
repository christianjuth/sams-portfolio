export function YouTubeSection({ videoId }: { videoId: string }) {
  return (
    <iframe className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`} />
  )
}
