"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText, Download } from "lucide-react";
import Link from "next/link";

interface FileItem {
  title: string;
  url: string;
}

interface SubjectCardProps {
  subject: string;
  files: FileItem[];
}

export default function SubjectCard({
  subject,
  files,
}: SubjectCardProps) {

  const [open, setOpen] = useState(false);

  return (

    <div className="bg-white rounded-xl shadow border overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          justify-between
          items-center
          p-5
          hover:bg-slate-50
          transition
        "
      >

        <div>

          <h2 className="text-xl font-semibold text-left">

            📘 {subject}

          </h2>

          <p className="text-sm text-slate-500">

            {files.length} Documents

          </p>

        </div>

        {open ? <ChevronUp /> : <ChevronDown />}

      </button>

      {open && (

        <div className="border-t">

          {files.map((file) => (

            <Link
              key={file.title}
              href={file.url}
              target="_blank"
              className="
                flex
                justify-between
                items-center
                px-6
                py-4
                hover:bg-primary-50
                border-b
              "
            >

              <div className="flex items-center gap-3">

                <FileText className="text-primary-700"/>

                {file.title}

              </div>

              <Download className="text-primary-700"/>

            </Link>

          ))}

        </div>

      )}

    </div>

  );
}