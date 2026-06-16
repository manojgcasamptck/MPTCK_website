"use client";

import { useEffect, useState } from "react";
import { recruiters } from "@/lib/data";

export default function RecruiterSlider() {
  const [offset, setOffset] = useState(0);
  const doubled = [...recruiters, ...recruiters];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % recruiters.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden py-4">
      <div
        className="flex gap-4 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${offset * 140}px)` }}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-sm font-medium text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all min-w-[120px] text-center"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
