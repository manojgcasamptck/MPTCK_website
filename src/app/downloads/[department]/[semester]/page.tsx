import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { downloads } from "@/lib/downloads";
import SubjectCard from "@/components/downloads/SubjectCard";

export default async function SemesterPage({
  params,
}: {
  params: Promise<{ department: string; semester: string }>;
}) {
  const { department, semester } = await params;

  const departmentData =
    downloads[department as keyof typeof downloads];

  if (!departmentData) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Department not found
        </h1>
      </main>
    );
  }

  const semesterData =
    departmentData.semesters[
      semester as keyof typeof departmentData.semesters
    ];

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-primary-900 text-white py-14">

        <div className="max-w-7xl mx-auto px-6">

          <Link
            href={`/downloads/${department}`}
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6"
          >
            <ArrowLeft size={18} />
            Back to Semesters
          </Link>

          <h1 className="text-5xl font-bold">
            {departmentData.name}
          </h1>

          <p className="mt-3 text-xl capitalize">
            {semester.replace("-", " ")}
          </p>

        </div>

      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 space-y-6">

        {!semesterData || semesterData.length === 0 ? (

          <div className="bg-white rounded-xl shadow p-10 text-center">

            <h2 className="text-2xl font-semibold">
              Study materials will be uploaded soon.
            </h2>

          </div>

        ) : (

          semesterData.map((subject) => (

            <SubjectCard
              key={subject.subject}
              subject={subject.subject}
              files={subject.files}
            />

          ))

        )}

      </section>

    </main>
  );
}