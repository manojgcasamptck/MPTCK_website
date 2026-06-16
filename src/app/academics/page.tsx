import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";

const links = [
  { href: "/academics/curriculum", label: "Curriculum" },
  { href: "/academics/calendar", label: "Academic Calendar" },
  { href: "/academics/examination", label: "Examination" },
  { href: "/academics/timetable", label: "Timetable" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero title="Academics" subtitle="Curriculum, calendar, and examinations" />
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
