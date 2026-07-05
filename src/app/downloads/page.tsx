import Link from "next/link";
import Image from "next/image";

const departments = [
  {
    slug: "computer",
    name: "Computer Engineering",
    //image: "/images/departments/computer.jpg",
  },
  {
    slug: "electronics",
    name: "Electronics Engineering",
    //image: "/images/departments/electronics.jpg",
  },
  {
    slug: "communication",
    name: "Electronics & Communication Engineering",
    //image: "/images/departments/general.jpg",
  },
  {
    slug: "electrical",
    name: "Electrical & Electronics Engineering",
    //image: "/images/departments/electrical.jpg",
  },
  {
    slug: "mechanical",
    name: "Mechanical Engineering",
    //image: "/images/departments/mechanical.jpg",
  },
  {
    slug: "hardware",
    name: "Computer Science & Technology ",
    //image: "/images/departments/hardware.jpg",
  },
 
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-primary-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Academic Downloads
          </h1>

          <p className="mt-4 text-lg text-primary-100">
            Select your department to access notes,
            question papers, lab manuals and study materials.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {departments.map((dept) => (

            <Link
              key={dept.slug}
              href={`/downloads/${dept.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
            >

             

              <div className="p-6">

                <h2 className="text-xl font-bold text-primary-900">
                  {dept.name}
                </h2>

                <p className="text-slate-600 mt-2">
                  Semester-wise study materials
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}
