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

<div className="flex justify-center bg-white p-2">

  <Image
    src={popup.image_url}
    alt={popup.title}
    width={800}
    height={1200}
    priority
    className="
      w-auto
      h-auto
      max-w-[90vw]
      max-h-[90vh]
      object-contain
      rounded-lg
    "
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
      w-12
      h-12
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



</div>

<div className="mt-4 border-t border-slate-200 pt-4">

  <div className="flex justify-center flex-wrap gap-4">

   

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