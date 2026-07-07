import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";

const links = [
  { href: "/admissions/eligibility", label: "Eligibility" },
  { href: "/admissions/courses", label: "Courses Offered" },
  { href: "/admissions/fee-structure", label: "Fee Structure" },
  { href: "/admissions/application-process", label: "Application Process" },
  { href: "/admissions/prospectus", label: "Download Prospectus" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero title="Admissions" subtitle="Join MPTC Karunagappally" /> 
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <p className="text-slate-600 text-lg mb-8">
            <p>
  Admissions to all diploma programs are through the centralized{" "}
  <a
    href="https://polyadmission.org/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    polyadmission.org
  </a>{" "}
  portal managed by SBTE Kerala.
</p>
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="p-5 bg-white rounded-xl border hover:border-primary-300 hover:shadow-md transition-all font-medium">
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
