"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface NewsItem {
  id: number;
  title: string;
}

export default function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    loadNews();
  }, []);

  async function loadNews() {
    const { data, error } = await supabase
      .from("news_events")
      .select("id,title")
      .order("created_at", { ascending: false })
      .limit(5);

    if (!error && data) {
      setNews(data);
    }
  }

  return (
    <div className="bg-blue-900 shadow-lg">

      <div className="flex items-center">

        {/* Left Badge */}

        <div
          className="
            bg-red-600
            text-white
            font-bold
            px-6
            py-3
            uppercase
            tracking-wide
            shrink-0
          "
        >
          📢 LATEST NEWS
        </div>

        {/* Marquee */}

        <div className="overflow-hidden flex-1">

        <div className="ticker">

               <div className="animate-marquee">

              {[...news, ...news].map((item, index) => (

                <span
                  key={`${item.id}-${index}`}
                  className="
                    mx-12
                    text-white
                    font-semibold
                    text-lg
                    inline-flex
                    items-center
                  "
                >
                  📌 {item.title}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}