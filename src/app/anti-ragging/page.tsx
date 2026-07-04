import {
    ShieldAlert,
    Users,
    PhoneCall,
    FileText,
  } from "lucide-react";
  
  export default function AntiRaggingPage() {
    return (
      <main className="min-h-screen bg-gray-50">
  
        {/* Hero */}
  
        <section className="bg-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
  
            <h1 className="text-4xl font-bold mb-4">
              Anti Ragging Cell
            </h1>
  
            <p className="text-lg text-red-100 max-w-3xl">
              Model Polytechnic College Karunagappally follows
              a Zero Tolerance Policy towards ragging.
              Every student has the right to study in a safe,
              secure and friendly campus.
            </p>
  
          </div>
        </section>
  
        {/* Objectives */}
  
        <section className="py-16">
  
          <div className="max-w-7xl mx-auto px-6">
  
            <h2 className="text-3xl font-bold text-center mb-10">
              Objectives
            </h2>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <ShieldAlert className="mx-auto text-red-700 mb-4" size={40}/>
                <h3 className="font-semibold">
                  Zero Tolerance
                </h3>
              </div>
  
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <Users className="mx-auto text-red-700 mb-4" size={40}/>
                <h3 className="font-semibold">
                  Student Safety
                </h3>
              </div>
  
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <PhoneCall className="mx-auto text-red-700 mb-4" size={40}/>
                <h3 className="font-semibold">
                  Immediate Action
                </h3>
              </div>
  
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <FileText className="mx-auto text-red-700 mb-4" size={40}/>
                <h3 className="font-semibold">
                  Awareness
                </h3>
              </div>
  
            </div>
  
          </div>
  
        </section>
  
        {/* Committee */}
  
        <section className="bg-white py-16">
  
          <div className="max-w-7xl mx-auto px-6">
  
            <h2 className="text-3xl font-bold text-center mb-8">
              Anti Ragging Committee
            </h2>
  
            <table className="w-full border">
  
              <thead className="bg-red-700 text-white">
  
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
                  <td className="p-3">Chairperson</td>
                </tr>
  
                <tr className="border-b">
                  <td className="p-3">2</td>
                  <td className="p-3">Senior Faculty</td>
                  <td className="p-3">Convener</td>
                </tr>
  
                <tr>
                  <td className="p-3">3</td>
                  <td className="p-3">Faculty Members</td>
                  <td className="p-3">Members</td>
                </tr>
  
              </tbody>
  
            </table>
  
          </div>
  
        </section>
  
        {/* Helpline */}
  
        <section className="py-16 bg-red-50">
  
          <div className="max-w-7xl mx-auto px-6">
  
            <h2 className="text-3xl font-bold mb-8">
              National Anti Ragging Helpline
            </h2>
  
            <div className="bg-white rounded-xl shadow p-6">
  
              <p>
                <strong>Toll Free:</strong> 1800-180-5522
              </p>
  
              <p className="mt-3">
                <strong>Email:</strong> helpline@antiragging.in
              </p>
  
              <a
  href="https://www.antiragging.in"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  www.antiragging.in
</a>
  
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }