import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero title="Student Success Stories" subtitle="Alumni achievements and testimonials" />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-4">&ldquo;{t.content}&rdquo;</p>
                <div className="font-poppins font-bold text-primary-900">{t.name}</div>
                <div className="text-slate-500 text-sm">{t.department} · Batch {t.batch}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
