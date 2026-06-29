"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

interface PopupNoticeData {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  pdf_url: string | null;
  button_text: string | null;
  button_link: string | null;
  active: boolean;
}

export default function PopupNotice() {
  const [popup, setPopup] = useState<PopupNoticeData | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadPopup();
  }, []);

  async function loadPopup() {
    const { data, error } = await supabase
      .from("popup_notices")
      .select("*")
      .eq("active", true)
      .order("id", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!error && data) {
      setPopup(data);
      setShow(true);
    }
  }

  if (!show || !popup) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/75 flex items-center justify-center p-4"
      onClick={() => setShow(false)}
    >
      {/* Popup Card */}

      <div
       className="
       relative
       bg-white
       rounded-2xl
       shadow-2xl
       w-fit
       max-w-[700px]
       overflow-hidden
       "
        onClick={(e) => e.stopPropagation()}
      >

{/* Poster */}

{popup.image_url && (

<div className="flex justify-center bg-white">

    <Image
      src={popup.image_url}
      alt={popup.title}
      width={650}
      height={950}
      className="
      w-full
      h-auto
      object-contain
      "
      priority
    />

  </div>

)}

{/* Close Button */}

<button
  onClick={() => setShow(false)}
  className="
      absolute
      top-0
      right--1
      z-[999]
      bg-white-50
      hover:bg-red-400
      text-black
      w-8
      h-8
      rounded-full
      text-1xl
      font-bold
      shadow-xl
      transition
  "
>
    close
</button>

<div className="p-2">
  <div className="flex flex-wrap justify-center gap-4">

{popup.pdf_url && (
  <a
    href={popup.pdf_url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
  >
    📄 Download Prospectus
  </a>
)}

</div>

<div className="mt-4 border-t border-slate-200 pt-4">

  <div className="flex justify-center flex-wrap gap-4">

    {popup.pdf_url && (

      <a
        href={popup.pdf_url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        📄 Download Prospectus
      </a>

    )}

    {popup.button_text && popup.button_link && (

      <a
        href={popup.button_link}
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        {popup.button_text}
      </a>

    )}

  </div>

</div>

</div>
{/* End Content */}
</div>

{/* End Popup Card */}

</div>
);
}