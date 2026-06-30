"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { getSupabaseClient } from "@/lib/supabase";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    setSubmitting(true);

    const supabase = getSupabaseClient();
    if (!supabase) {
      setSubmitting(false);
      setErrorMessage("Admissions service is not configured. Please contact the college office.");
      return;
    }

    const { error } = await supabase.from("admissions").insert([
      {
        full_name: name,
        email,
        phone,
      },
    ]);

    setSubmitting(false);

    if (error) {
      setErrorMessage(error.message || "Could not submit your registration. Please try again.");
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <PageHero title="Admission Registration" subtitle="Apply for Diploma programs at MPTC Karunagappally" />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.3fr_0.9fr] items-start">
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-900">How to Apply</h2>
              <p className="text-slate-600 leading-relaxed">
                Admissions for our diploma programmes are open for the upcoming academic year. Please follow the official POLYCAP admission portal to complete your application.
              </p>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="font-semibold text-primary-900 mb-3">Admission Information</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• Admission is managed through the POLYCAP portal.</li>
                  <li>• Eligible students should have completed SSLC, Plus Two, or ITI.</li>
                  <li>• Courses offered include all six diploma departments.</li>
                  <li>• For assistance, please contact the college office or admissions team.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <a
                  href="https://polyadmission.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary-900 px-6 py-3 text-white font-semibold hover:bg-primary-800 transition"
                >
                  Apply via POLYCAP Portal
                </a>
                <p className="text-sm text-slate-500">
                  If you cannot complete the online application, please visit the college office for help.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              {submitted ? (
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-primary-900">Interest Submitted</h3>
                  <p className="text-slate-600">
                    Thank you for registering your interest. Our admissions team will contact you with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-300"
                    />
                  </div>
                  {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white hover:bg-gold-500 transition disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Submit Interest"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
