import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { Download, FileText } from "lucide-react";

const downloads = [
  { title: "Admission Prospectus 2025-26", file: "/images/brochure.jpeg", type: "Brochure" },
  { title: "Application Form Guidelines", file: "#", type: "PDF" },
  { title: "Academic Calendar 2025-26", file: "#", type: "PDF" },
  { title: "Fee Structure Notification", file: "#", type: "PDF" },
  { title: "Placement Report 2025-26", file: "#", type: "Report" },
  { title: "Anti-Ragging Affidavit", file: "#", type: "Form" },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero title="Downloads" subtitle="Forms, brochures, and documents" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {downloads.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <a
                href={d.file}
                download={d.file !== "#"}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <FileText size={22} className="text-primary-500 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-primary-900">{d.title}</div>
                  <div className="text-sm text-slate-500">{d.type}</div>
                </div>
                <Download size={20} className="text-slate-400 group-hover:text-primary-500" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
