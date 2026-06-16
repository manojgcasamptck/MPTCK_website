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
    <section className="relative h-64 md:h-72 flex items-end overflow-hidden">
      <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-800/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 w-full">
        <h1 className="font-poppins font-bold text-white text-3xl md:text-4xl">{title}</h1>
        {subtitle && <p className="text-primary-100 mt-2 text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
