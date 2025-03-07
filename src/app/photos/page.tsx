import Image from 'next/image'

const IMAGES = [
  "/slide-3.png",
  "/slide-4.png",
  "/slide-1.png",
  "/slide-2.png",
  "/slide-5.png",
  "/slide-6.png",
]

export default function Page() {
  return (
    <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-6 py-20 px-6">
      {IMAGES.map(img => (
        <div key={img} className="aspect-square relative">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
      ))}
    </div>
  )
}
