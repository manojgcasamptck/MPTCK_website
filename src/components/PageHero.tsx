import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  image = "/images/MPTC2.jpeg",
}: PageHeroProps) {
  return (
    <section className="relative h-72 md:h-80 lg:h-96 flex items-end overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Blue Overlay */}

      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Bottom Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">

        <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-lg md:text-xl text-blue-100 max-w-3xl">
            {subtitle}
          </p>
        )}

      </div>

    </section>
  );
}
