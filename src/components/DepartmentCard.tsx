import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Department } from "@/lib/data";

interface DepartmentCardProps {
  dept: Department;
}

export default function DepartmentCard({ dept }: DepartmentCardProps) {
  const Icon = dept.icon;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={dept.image}
          alt={dept.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-60`} />
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
          <Icon size={20} className="text-white" />
        </div>
        <span className="absolute top-4 right-4 text-xs font-bold bg-white/20 backdrop-blur text-white rounded-full px-3 py-1">
          {dept.short}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-bold text-primary-900 text-lg mb-2">{dept.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{dept.description}</p>
        <Link
          href={`/departments/${dept.slug}`}
          className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm hover:text-primary-700 transition-colors"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
