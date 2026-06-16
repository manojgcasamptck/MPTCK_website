import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";

export default function ProspectusPage() {
  return (
    <>
      <PageHero title="Download Prospectus" subtitle="Admission brochure and information" />
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Reveal>
            <div className="relative w-full max-w-md mx-auto h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/brochure.jpeg" alt="MPTC Admission Brochure" fill className="object-contain bg-white" />
            </div>
            <p className="text-slate-600 mb-6">Download the official admission brochure for detailed course and facility information.</p>
            <a href="/images/brochure.jpeg" download className="btn-primary inline-flex">
              Download Prospectus
            </a>
            <div className="mt-6">
              <Link href="/admissions/application-process" className="text-primary-500 hover:underline">
                View Application Process →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
