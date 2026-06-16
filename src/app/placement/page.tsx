import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import PlacementChart from "@/components/PlacementChart";

const links = [
  { href: "/placement/statistics", label: "Placement Statistics" },
  { href: "/placement/recruiters", label: "Recruiters" },
  { href: "/placement/success-stories", label: "Student Success Stories" },
  { href: "/placement/cell", label: "Placement Cell" },
];

export default function PlacementPage() {
  return (
    <>
      <PageHero title="Training & Placement" subtitle="Building careers since 1997" />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="bg-white rounded-2xl p-6 shadow-sm border mb-10">
              <h2 className="font-poppins font-bold text-primary-900 mb-4">Placement Overview</h2>
              <PlacementChart />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {links.map((l) => (
              <Reveal key={l.href}>
                <Link href={l.href} className="block p-5 bg-white rounded-xl border hover:border-primary-300 hover:shadow-md transition-all font-medium text-center">
                  {l.label}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
