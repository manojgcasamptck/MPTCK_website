"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/utils";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with MPTC Karunagappally" />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-500" size={22} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-primary-900 mb-1">Address</h3>
                  <p className="text-slate-600">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary-500" size={22} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-primary-900 mb-1">Phone</h3>
                  <p className="text-slate-600">{siteConfig.phone}</p>
                  <p className="text-slate-600">{siteConfig.mobile.join(", ")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-primary-500" size={22} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-primary-900 mb-1">Email</h3>
                  <p className="text-slate-600">{siteConfig.email}</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden h-64 bg-slate-100">
                <iframe
                  title="MPTC Location"
                  src="https://maps.google.com/maps?q=Model+Polytechnic+College+Karunagappally&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <h3 className="font-poppins font-bold text-green-800 text-xl mb-2">Message Sent!</h3>
                <p className="text-green-700">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border space-y-5">
                <h3 className="font-poppins font-bold text-primary-900 text-xl">Send a Message</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input required className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-300 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" required className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-300 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-300 outline-none resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
