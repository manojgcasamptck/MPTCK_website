import Link from "next/link";
import { downloads } from "@/lib/downloads";
import {
  BookOpen,
  FileText,
  Download,
  ArrowLeft,
} from "lucide-react";

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

if (!semesterData || semesterData.length === 0) {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-primary-900 text-white py-14">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            {departmentData.name}
          </h1>

          <p className="mt-3 text-xl">
            {semester.replace("-", " ").toUpperCase()}
          </p>

        </div>

      </section>

      <div className="max-w-6xl mx-auto py-20 text-center">

        <h2 className="text-3xl font-bold">
          Study materials will be uploaded soon.
        </h2>

      </div>

    </main>
  );
}

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

          <h1 className="text-5xl font-bold capitalize">
            {department.replace("-", " ")}
          </h1>

          <p className="mt-3 text-xl">
            {semester.replace("-", " ").toUpperCase()}
          </p>

        </div>

      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">

      {semesterData.map((subject) => (

          <div
            key={subject.subject}
            className="bg-white rounded-2xl shadow-lg p-8"
          >

            <div className="flex items-center gap-3 mb-6">

              <BookOpen className="text-primary-700" />

              <h2 className="text-2xl font-bold">
                {subject.subject}
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-4">

{subject.files.map((doc) => (

  <Link
    key={doc.title}
    href={doc.url}
    target="_blank"
    className="
      border
      rounded-xl
      p-4
      hover:bg-primary-50
      transition
      flex
      items-center
      justify-between
    "
  >

    <div className="flex items-center gap-3">

      <FileText className="text-primary-700" />

      {doc.title}

    </div>

    <Download size={20} />

  </Link>

))}

</div>

</div>

))}

</section>

</main>
);
}