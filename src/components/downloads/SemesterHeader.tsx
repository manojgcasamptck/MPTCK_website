import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SemesterHeaderProps {
  department: string;
  semester: string;
}

export default function SemesterHeader({
  department,
  semester,
}: SemesterHeaderProps) {
  return (
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
  );
}