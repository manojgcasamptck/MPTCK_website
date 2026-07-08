import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  image = "/images/colimg9.jpg",
}: PageHeroProps) {
  return (
    <section className="relative h-72 md:h-80 lg:h-96 flex items-end overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="50vw"
        className="object-cover"
      />

      {/* Blue Overlay */}

      <div className="absolute inset-0 bg-blue-950/80"></div>

      {/* Bottom Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent"></div>

      <div className="page-container relative z-10 pb-12">

      <h1
  className="
    text-white
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    drop-shadow-2xl
  "
>
  {title}
</h1>

        {subtitle && (
         <p
         className="
           mt-4
           text-blue-100
           text-lg
           md:text-xl
           max-w-3xl
           drop-shadow-lg
         "
       >
         {subtitle}
       </p>
        )}

      </div>

    </section>
  );
}
