import { Calendar, ArrowRight } from "lucide-react";
import { categoryColors } from "@/lib/data";

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
}

export default function EventCard({
  title,
  description,
  category,
  date,
}: EventCardProps) {

  const colorClass =
    categoryColors[category] || categoryColors.news;

  const eventDate = new Date(date);

  return (

    <div
      className="
        group
        bg-orange
        border
        border-gray-100
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        flex
        flex-col
        h-full
      "
    >

      {/* Top Image Area */}

      <div
        className="
          bg-gradient-to-br
          from-primary-50
          to-primary-100
          h-40
          flex
          items-center
          justify-center
          relative
          shrink-0
        "
      >

        <Calendar
          size={44}
          className="text-primary-200"
        />

        <div className="absolute top-4 left-4">

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${colorClass}`}
          >

            {category.replace("_", " ").toUpperCase()}

          </span>

        </div>

        <div
          className="
            absolute
            top-4
            right-4
            bg-primary-900
            text-white
            text-center
            px-3
            py-1.5
            rounded-lg
            text-xs
          "
        >

          <div className="font-bold">

            {eventDate.getDate()}

          </div>

          <div>

            {eventDate.toLocaleString("default", {
              month: "short",
            })}

          </div>

        </div>

      </div>

      {/* Card Body */}

      <div
        className="
          p-5
          flex
          flex-col
          flex-1
        "
      >

        <h3
          className="
            font-poppins
            font-semibold
            text-primary-900
            text-lg
            leading-7
            min-h-[60px]
            line-clamp-2
          "
        >

          {title}

        </h3>

        <p
          className="
            mt-2
            text-slate-600
            text-sm
            leading-6
            min-h-[72px]
            line-clamp-3
          "
        >

          {description}

        </p>

        {/* Push button to bottom */}

        <div className="mt-auto pt-5">

          <button
            className="
              text-primary-600
              font-semibold
              hover:text-red-600
              flex
              items-center
              gap-2
            "
          >

            Read More

            <ArrowRight size={15} />

          </button>

        </div>

      </div>

    </div>

  );
}
