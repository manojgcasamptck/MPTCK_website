import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";

const links = [
  { href: "/facilities/library", label: "Library" },
  { href: "/facilities/laboratories", label: "Laboratories" },
  { href: "/facilities/workshops", label: "Workshops" },
  { href: "/facilities/smart-classrooms", label: "Smart Classrooms" },
  { href: "/facilities/hostel", label: "Hostel" },
  { href: "/facilities/cafeteria", label: "Cafeteria" },
  { href: "/facilities/sports", label: "Sports" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero title="Facilities" subtitle="World-class infrastructure for learning" />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 grid sm:grid-cols-2 gap-4">
          {links.map((l) => (
            <Reveal key={l.href}>
              <Link href={l.href} className="block p-5 bg-white rounded-xl border hover:border-primary-300 hover:shadow-md transition-all font-medium">
                {l.label}
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
