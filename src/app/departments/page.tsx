import DepartmentCard from "@/components/DepartmentCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { departments } from "@/lib/data";

export default function DepartmentsPage() {
  return (
    <>
      <PageHero title="Departments" subtitle="Six diploma engineering programs" />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d, i) => (
            <Reveal key={d.slug} delay={i * 60}>
              <DepartmentCard dept={d} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
