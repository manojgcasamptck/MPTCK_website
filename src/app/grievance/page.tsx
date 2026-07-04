import { ShieldCheck, Users, FileText, Phone } from "lucide-react";

export default function GrievancePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Grievance Redressal Cell
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            The Grievance Redressal Cell provides a transparent,
            fair and effective mechanism for resolving grievances
            of students, parents and staff in a time-bound manner.
          </p>

        </div>
      </section>

      {/* Objectives */}

      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Objectives
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <ShieldCheck className="mx-auto text-blue-700 mb-4" size={42}/>
            <h3 className="font-semibold mb-2">
              Fair Resolution
            </h3>
            <p className="text-gray-600 text-sm">
              Ensure transparent and impartial grievance handling.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Users className="mx-auto text-blue-700 mb-4" size={42}/>
            <h3 className="font-semibold mb-2">
              Student Welfare
            </h3>
            <p className="text-gray-600 text-sm">
              Promote a healthy academic environment.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <FileText className="mx-auto text-blue-700 mb-4" size={42}/>
            <h3 className="font-semibold mb-2">
              Transparency
            </h3>
            <p className="text-gray-600 text-sm">
              Maintain proper documentation of every grievance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <Phone className="mx-auto text-blue-700 mb-4" size={42}/>
            <h3 className="font-semibold mb-2">
              Timely Response
            </h3>
            <p className="text-gray-600 text-sm">
              Address complaints promptly and effectively.
            </p>
          </div>

        </div>

      </section>

      {/* Committee */}

      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-8">
            Grievance Redressal Committee
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border">

              <thead className="bg-blue-800 text-white">

                <tr>
                  <th className="p-3 text-left">Sl.No</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Designation</th>
                </tr>

              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-3">1</td>
                  <td className="p-3">Principal</td>
                  <td className="p-3">Chairman</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">2</td>
                  <td className="p-3">Faculty Member</td>
                  <td className="p-3">Convener</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">3</td>
                  <td className="p-3">HOD Representative</td>
                  <td className="p-3">Member</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="py-16 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Contact
          </h2>

          <div className="bg-white rounded-xl shadow p-6">

            <p>
              <strong>Email:</strong> mptkarunagappally.ihrd@gmail.com
            </p>

            <p className="mt-3">
              <strong>Phone:</strong> +91 "8547005083"
            </p>

            <p className="mt-3">
              <strong>Office:</strong> Principal Office
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}