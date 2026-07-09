"use client";
import NewsTicker from "@/components/NewsTicker";
import Link from "next/link";
import Image from "next/image";
import PopupNotice from "@/components/PopupNotice";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  Users,
  Building2,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Star,
  Microscope,
  Trophy,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import Hero from "@/components/Hero";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import DepartmentCard from "@/components/DepartmentCard";
import PlacementChart from "@/components/PlacementChart";
import EventCard from "@/components/EventCard";
import RecruiterSlider from "@/components/RecruiterSlider";
import {
  stats,
  whyChoose,
  departments,
  events,
  testimonials,
  galleryImages,
} from "@/lib/data";

const whyIcons = [Briefcase, Users, Microscope, Building2, Award, Trophy];

export default function HomePage() {
  const [testiIdx, setTestiIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTestiIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Hero />
      <NewsTicker />
      <PopupNotice />
      {/* Stats */}
      <section className="bg-primary-500 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold font-poppins text-gold-400">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-primary-100 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-block bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Why Choose Us
              </div>
              <h2 className="section-title">Why Choose MPTC Karunagappally?</h2>
              <p className="section-subtitle mx-auto text-center mt-4">
                Rigorous academics with real-world industry exposure for job-ready engineers.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

  {whyChoose.map((item, i) => {

    const Icon = whyIcons[i];

    return (

      <Reveal key={item.title} delay={i * 80}>

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-7
            border
            border-slate-100
            hover:shadow-xl
            transition-all
            duration-300
            hover:-translate-y-2
            group
            h-full
            flex
            flex-col
            min-h-[380px]
          "
        >

          <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors">

            <Icon
              size={22}
              className="text-primary-500 group-hover:text-white transition-colors"
            />

          </div>

          <h3
            className="
              text-primary-900
              text-xl
              font-bold
              mb-4
              min-h-[64px]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-slate-600
              text-base
              leading-7
              flex-grow
            "
          >
            {item.description}
          </p>

        </div>

      </Reveal>

    );

  })}

</div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <div className="inline-block bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Our Programs
              </div>
              <h2 className="section-title">Six Departments</h2>
              <p className="section-subtitle mx-auto text-center mt-4">
                Industry-aligned curriculum with expert faculty and cutting-edge laboratories.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((d, i) => (
              <Reveal key={d.slug} delay={i * 70}>
                <DepartmentCard dept={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/MPTC3.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-block bg-gold-400/20 text-gold-400 border border-gold-400/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Placement Success
              </div>
              <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl mb-4">
                Outstanding Placement Record
              </h2>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <Reveal>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-poppins font-bold text-primary-900 mb-4">Year-wise Placement Chart</h3>
                <PlacementChart />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Highest Package", display: "4 LPA" },
                  { label: "Average Package", display: "2.5 LPA" },
                  { label: "Students Placed (2025-26)", val: 515, sfx: "+" },
                  { label: "Companies (2025-26)", val: 90, sfx: "+" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-center text-white">
                    <div className="text-3xl font-bold font-poppins text-gold-400">
                      {"display" in item ? item.display : <AnimatedCounter end={item.val!} suffix={item.sfx} />}
                    </div>
                    <div className="text-primary-200 text-sm mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-poppins font-bold text-primary-900 text-center text-xl mb-6">Top Recruiters</h3>
              <RecruiterSlider />
              <div className="text-center mt-6">
                <Link href="/placement/recruiters" className="btn-primary">
                  View All Recruiters <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* News & Events */}
     

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="section-title">What Our Students Say</h2>
            </div>
          </Reveal>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="text-gold-400 fill-gold-400" />
              ))}
            </div>
            <blockquote className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 italic">
              &ldquo;{testimonials[testiIdx].content}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Users size={20} className="text-primary-500" />
              </div>
              <div>
                <div className="font-poppins font-bold text-primary-900">{testimonials[testiIdx].name}</div>
                <div className="text-slate-500 text-sm">
                  {testimonials[testiIdx].department} · Batch {testimonials[testiIdx].batch}
                </div>
              </div>
            </div>
            <button
              onClick={() => setTestiIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-100 hover:bg-primary-100 flex items-center justify-center hidden md:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setTestiIdx((i) => (i + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-100 hover:bg-primary-100 flex items-center justify-center hidden md:flex"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex justify-center gap-2.5 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestiIdx(i)}
                className={`h-2 rounded-full transition-all ${i === testiIdx ? "w-6 bg-primary-500" : "w-2 bg-gray-300"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="section-title">Life at MPTC</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((img, i) => (
              <Reveal key={img.title} delay={i * 60}>
                <div className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 row-span-2 min-h-72" : "h-44"}`}>
                  <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-semibold text-sm">{img.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center mt-10">
              <Link href="/gallery" className="btn-primary">
                View Full Gallery <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <div className="w-16 h-16 bg-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={30} className="text-primary-900" />
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl mb-4">
              Ready to Start Your Engineering Journey?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Join 5000+ alumni who built their careers at Model Polytechnic College Karunagappally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <Link
  href="https://www.polyadmission.org/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-gold text-base py-3.5 px-8"
>
  Apply for Admission <ArrowRight size={18} />
</Link>
              <Link href="/contact" className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
