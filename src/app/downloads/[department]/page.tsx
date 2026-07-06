import Link from "next/link";

const semesters = [
  1, 2, 3, 4, 5, 6
];

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department } = await params;

  const departmentName = department
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-primary-900 text-white py-14">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            {departmentName}
          </h1>

          <p className="mt-3 text-primary-100">
            Select a semester to view notes,
            question papers and other study materials.
          </p>

        </div>

      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {semesters.map((semester) => (

            <Link
              key={semester}
              href={`/downloads/${department}/semester${semester}`}
              className="
                rounded-2xl
                bg-gradient-to-br
                from-amber-50
                to-green-500
                border
                border-yellow-200
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                p-8
                text-center
              "
            >

              <h2 className="text-2xl font-bold text-primary-900">
                Semester {semester}
              </h2>

              <p className="mt-3 text-slate-600">
                View all study materials
              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}