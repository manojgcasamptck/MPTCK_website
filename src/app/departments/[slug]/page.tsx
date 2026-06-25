import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { departments } from "@/lib/data";

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) notFound();

  const Icon = dept.icon;

  return (
    <>
      <PageHero title={dept.name} subtitle={`${dept.short} Department`} image={dept.image} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image src={dept.image} alt={dept.name} fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                <Icon size={24} className="text-white" />
              </div>
              <span className="text-sm font-bold bg-primary-50 text-primary-700 px-3 py-1 rounded-full">{dept.short}</span>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">{dept.description}</p>
            <ul className="space-y-2 text-slate-600 mb-8">
            {dept.hod && (
            <li>
               <strong>HOD:</strong> {dept.hod}
            </li>
            )}

            {dept.hodPhone && (
           <li>
               <strong>Contact:</strong> {dept.hodPhone}
            </li>
            )}
              {dept.established && <li><strong>Established:</strong> {dept.established}</li>}
              <li><strong>Duration:</strong> 3 Years Diploma</li>
              <li><strong>Affiliation:</strong> DTE Kerala | AICTE Approved</li>
            </ul>
            {dept.faculty && (
  <div className="bg-slate-50 rounded-xl p-5 mb-8">
    <h3 className="font-bold text-lg mb-4">
      Faculty Members
    </h3>

    <ul className="space-y-3">
      {dept.faculty.map((member, index) => (
        <li key={index}>
          <div className="font-medium">
            {member.name}
          </div>

          <div className="text-primary-600 text-sm">
            {member.phone}
          </div>
        </li>
      ))}
    </ul>
  </div>
)}
            <Link href="/admissions" className="btn-primary">Apply for {dept.short}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
