import Image from 'next/image'

export function Bio({
  image,
  title,
  bio,
}: {
  image: string,
  title: string
  bio: string[]
}) {
  return <section className="grid md:grid-cols-2 md:gap-6">
    <div className="bg-zinc-50 aspect-square relative">
      <Image src={image} fill alt="" className="object-cover object-left" />
    </div>

    <div className="flex flex-col gap-4 justify-center bg-black/85 p-6 backdrop-blur-md leading-7">
      <h2 className="font-bold text-3xl">{title}</h2>

      {bio.map((p, i) => (
        <p key={p + i}>
          {p}
        </p>
      ))}

    </div>
  </section>
}
