import { Calendar, ArrowRight } from "lucide-react";
import { categoryColors } from "@/lib/data";

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
}

export default function EventCard({ title, description, category, date }: EventCardProps) {
  const colorClass = categoryColors[category] || categoryColors.news;
  const eventDate = new Date(date);

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 h-40 flex items-center justify-center relative">
        <Calendar size={44} className="text-primary-200" />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colorClass}`}>
            {category.replace("_", " ").toUpperCase()}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-primary-900 text-white text-center px-3 py-1.5 rounded-lg text-xs">
          <div className="font-bold">{eventDate.getDate()}</div>
          <div>{eventDate.toLocaleString("default", { month: "short" })}</div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-poppins font-semibold text-primary-900 text-base mb-2 line-clamp-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{description}</p>
        <button className="mt-4 text-primary-500 text-sm font-semibold hover:text-primary-700 flex items-center gap-1">
          Read More <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
