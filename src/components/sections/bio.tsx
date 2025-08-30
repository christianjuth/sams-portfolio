import Image from "next/image";

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
    <div className="bg-black p-7 md:p-10 text-white">
      <h2 className="text-3xl mb-6 font-heading">{title}</h2>

      <div className="lg:columns-2 gap-x-8">
        <div className="float-right max-md:w-full md:w-2/5 aspect-square relative ml-6 mb-6 md:mb-4 break-before-column">
          <Image src={image} alt={`${title} headshot`} fill className="object-cover" />
        </div>

        {bio.map((p, i) => (
          <p key={i} className="break-inside-avoid mb-6 text-justify">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
