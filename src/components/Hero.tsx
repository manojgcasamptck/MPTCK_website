"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { siteConfig } from "@/lib/utils";

const heroImages = [
  "/images/MPTC1.jpeg",
  "/images/MPTC2.jpeg",
  "/images/MPTC3.jpeg",
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImages[0]}
          alt="Model Polytechnic College Karunagappally campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/92 via-primary-900/75 to-primary-800/40" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-1 h-1 bg-gold-400/60 rounded-full"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-gold-400/20 border border-gold-400/40 rounded-full px-4 py-1.5 text-gold-400 text-sm font-medium mb-6">
            Established {siteConfig.established} · Government Polytechnic · IHRD Kerala
          </div>

          <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
            Model Polytechnic College
            <span className="block text-gold-400">Karunagappally</span>
          </h1>

          <p className="text-primary-100 text-lg md:text-xl mb-8 max-w-xl">
            {siteConfig.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/admissions" className="btn-gold text-base py-3.5 px-7">
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/departments"
              className="bg-white/10 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              Explore Departments
            </Link>
            <Link
              href="/placement/statistics"
              className="border border-gold-400/50 text-gold-300 px-7 py-3.5 rounded-lg font-semibold hover:bg-gold-400/10 transition-all inline-flex items-center gap-2"
            >
              <TrendingUp size={16} /> Placement Statistics
            </Link>
            <Link
              href="/contact"
              className="text-white/90 px-7 py-3.5 rounded-lg font-semibold hover:text-gold-400 transition-all inline-flex items-center gap-2 underline-offset-4 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
