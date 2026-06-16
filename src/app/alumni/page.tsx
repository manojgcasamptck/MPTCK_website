import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function AlumniPage() {
  return (
    <>
      <PageHero title="Alumni" subtitle="5000+ proud graduates worldwide" />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <div className="text-5xl font-bold font-poppins text-primary-500 mb-4">
              <AnimatedCounter end={5000} suffix="+" />
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our alumni network spans across IT, manufacturing, power sector, and public services.
              MPTC graduates serve in companies like Infosys, TCS, KELTRON, KSEB, and many more.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Countries", value: 5, suffix: "+" },
                { label: "Industry Sectors", value: 15, suffix: "+" },
                { label: "Years of Legacy", value: 28, suffix: "+" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 border">
                  <div className="text-3xl font-bold text-gold-500 font-poppins">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
