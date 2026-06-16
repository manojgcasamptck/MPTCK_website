import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";

const links = [
  { href: "/about/history", label: "History" },
  { href: "/about/vision-mission", label: "Vision & Mission" },
  { href: "/about/principal-message", label: "Principal's Message" },
  { href: "/about/governing-body", label: "Governing Body" },
  { href: "/about/achievements", label: "Achievements" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Learn about MPTC Karunagappally" />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Model Polytechnic College Karunagappally is a premier Government controlled institution
              under IHRD, Kerala — dedicated to shaping competent engineers since 1997.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="p-5 bg-white rounded-xl border border-slate-100 hover:border-primary-300 hover:shadow-md transition-all font-medium text-primary-900"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
