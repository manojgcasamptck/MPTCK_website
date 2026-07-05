import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Download,
} from "lucide-react";

export default function MandatoryDisclosurePage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}

      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold">
            Mandatory Disclosure
          </h1>

          <p className="mt-4 text-lg text-primary-100 max-w-3xl">
            Mandatory Disclosure of Model Polytechnic College
            Karunagappally in accordance with AICTE Approval
            Process Handbook.
          </p>

        </div>
      </section>

      {/* Institution Details */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Institution Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow p-6">

              <div className="flex items-center gap-3 mb-3">
                <Building2 className="text-primary-700"/>
                <h3 className="font-semibold">
                  Basic Information
                </h3>
              </div>

              <table className="w-full text-sm">

                <tbody>

                  <tr>
                    <td className="font-semibold py-2">
                      Institution
                    </td>
                    <td>
                      Model Polytechnic College Karunagappally
                    </td>
                  </tr>

                  <tr>
                    <td className="font-semibold py-2">
                      Established
                    </td>
                    <td>
                      1997
                    </td>
                  </tr>

                  <tr>
                    <td className="font-semibold py-2">
                      Management
                    </td>
                    <td>
                      IHRD, Government of Kerala
                    </td>
                  </tr>

                  <tr>
                    <td className="font-semibold py-2">
                      Approval
                    </td>
                    <td>
                      AICTE
                    </td>
                  </tr>

                  <tr>
                    <td className="font-semibold py-2">
                      Affiliation
                    </td>
                    <td>
                      SBTE Kerala
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-primary-700"/>
                <h3 className="font-semibold">
                  Contact Details
                </h3>
              </div>

              <p className="flex items-center gap-2 py-2">
                <MapPin size={18}/>
                Karunagappally, Kollam, Kerala
              </p>

              <p className="flex items-center gap-2 py-2">
                <Phone size={18}/>
                +91 8547005083 / 9447488348
              </p>

              <p className="flex items-center gap-2 py-2">
                <Mail size={18}/>
                mptkarunagappally.ihrd@gmail.com
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Courses */}

      <section className="py-12 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Courses Offered
          </h2>

          <table className="w-full border">

            <thead className="bg-primary-800 text-white">

              <tr>
                <th className="p-3">Programme</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Intake</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Computer Engineering</td>
                <td className="p-3">3 Years</td>
                <td className="p-3">60</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Computer Science & Technology </td>
                <td className="p-3">3 Years</td>
                <td className="p-3">60</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Electronics Engineering</td>
                <td className="p-3">3 Years</td>
                <td className="p-3">60</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Electronics & Communication Engineering</td>
                <td className="p-3">3 Years</td>
                <td className="p-3">60</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Electrical & Electronics Engineering</td>
                <td className="p-3">3 Years</td>
                <td className="p-3">60</td>
              </tr>

              <tr>
                <td className="p-3">Mechanical Engineering</td>
                <td className="p-3">3 Years</td>
                <td className="p-3">60</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


    </main>
  );
}