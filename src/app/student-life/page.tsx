import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";

const links = [
  { href: "/student-life/clubs", label: "Clubs" },
  { href: "/student-life/nss", label: "NSS" },
  { href: "/student-life/arts-sports", label: "Arts & Sports" },
  { href: "/student-life/technical-fest", label: "Technical Fest" },
];

export default function StudentLifePage() {
  return (
    <>
      <PageHero title="Student Life" subtitle="Beyond the classroom" />
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
