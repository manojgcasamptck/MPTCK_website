"use client";
import ContentPage from "@/components/ContentPage";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
const content = {
  title: "Industry on Campus (IOC@MPTCK)",
  subtitle: "Bridging Academic Learning with Industrial Experience",

  content: [
    "Model Polytechnic College Karunagappally has established Industry on Campus (IOC @ MPTCK) units to provide students with practical industrial exposure while pursuing their diploma programmes.",

    "The campus presently hosts two IOC units. One unit, Electronics Manufacturing IOC ,which is engaged in the production of voltage stabilizers and inverters, while the second unit, Software Development IOC, that specializes in software development.",

    "Students from different departments actively participate in these IOC units and gain valuable experience in manufacturing, product development, software engineering, teamwork, quality assurance, and customer-oriented industrial practices.",

    "The IOC initiative strengthens the employability of students by exposing them to real industrial environments and improving their technical as well as professional skills before graduation.",
  ],

  bullets: [
    "Production of Voltage Stabilizers",
    "Production of Power Inverters",
    "Software Development Unit",
    "Industrial Training",
    "Internship Opportunities",
    "Industry–Institute Collaboration",
    "Skill Development",
    "Placement Readiness",
  ],
};

export default function IOCPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [selectedCaption, setSelectedCaption] = useState("");
  return (
    <ContentPage
      content={content}
      image="/images/colimg9.jpg"
     
    >

      {/* Images will be added here in the next step */}
      <div className="mt-14">

<h2 className="text-3xl font-bold text-center text-primary-900 mb-10">
  Industry on Campus Activities
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {[
    {
      file: "iocimg10.jpg",
      caption: "Inverter Assembling by Students @ Electronics Manufacturing IOC",
    },
    {
      file: "iocimg11.jpg",
      caption: "Inverter Assembling @ Electronics Manufacturing IOC",
    },
    {
      file: "iocimg111.jpg",
      caption: "Software IOC Inauguration by the Director IHRD",
    },
    {
      file: "iocimg12.jpg",
      caption: "Voltage Stabilizer Assembling @ Electronics Manufacturing IOC ",
    },
    {
      file: "iocimg2.jpg",
      caption: "IOC in the News",
    },
    {
      file: "iocimg1.jpg",
      caption: "IOC-Earn While You Learn News",
    },
  ].map((item) => (

    <div
      key={item.file}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
    >

<Image
  src={`/images/${item.file}`}
  alt={item.caption}
  width={500}
  height={350}
  className="w-full h-64 object-cover cursor-pointer"
  onClick={() => {
    setSelectedImage(`/images/${item.file}`);
    setSelectedCaption(item.caption);
  }}
/>

      <div className="p-4">

        <p className="text-center font-semibold text-slate-700">
          {item.caption}
        </p>

      </div>

    </div>

  ))}

</div>

</div>
{selectedImage && (
  <Lightbox
    image={selectedImage}
    caption={selectedCaption}
    onClose={() => setSelectedImage(null)}
  />
)}
    </ContentPage>
  );
}