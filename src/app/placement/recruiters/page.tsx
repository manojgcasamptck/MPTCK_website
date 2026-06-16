import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { recruiters } from "@/lib/data";

export default function RecruitersPage() {
  return (
    <>
      <PageHero title="Our Recruiters" subtitle="100+ companies visit campus annually" />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              {recruiters.map((r) => (
                <div key={r} className="bg-white border border-slate-200 rounded-xl px-6 py-4 text-sm font-medium text-slate-700 hover:border-primary-300 hover:bg-primary-50 transition-all">
                  {r}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
