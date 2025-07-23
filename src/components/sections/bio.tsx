import Image from "next/image";

//<div className="flex flex-col gap-4 justify-center bg-black/85 p-6 backdrop-blur-md leading-7">

export function Bio({
  image,
  title,
  bio,
}: {
  image: string;
  title: string;
  bio: string[];
}) {
  return (
    <section className="bg-black p-7 md:p-10 text-white">
      <h2 className="font-bold text-3xl mb-6">{title}</h2>

      <div className="lg:columns-2 gap-x-8">
        <div className="float-right max-md:w-full md:w-2/5 aspect-square relative ml-6 mb-6 md:mb-4 break-before-column">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {bio.map((p, i) => (
          <p key={i} className="break-inside-avoid mb-6 text-justify">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
