"use client";

import Image from "next/image";

interface LightboxProps {
  image: string;
  caption: string;
  onClose: () => void;
}

export default function Lightbox({
  image,
  caption,
  onClose,
}: LightboxProps) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-red-400"
        >
          ×
        </button>

        <Image
          src={image}
          alt={caption}
          width={1200}
          height={800}
          className="rounded-xl object-contain w-full max-h-[80vh]"
        />

        <p className="text-center text-white mt-4 text-lg">
          {caption}
        </p>
      </div>
    </div>
  );
}