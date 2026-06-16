"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { departments } from "@/lib/data";

type ChatMessage = { role: "bot" | "user"; text: string };

const faqResponses: Record<string, string> = {
  admission: `Admissions are through POLYCAP portal (polycap.kerala.gov.in). Eligibility: SSLC pass. Contact: ${siteConfig.phone}`,
  course: `We offer 6 diploma programs: ${departments.map((d) => d.short).join(", ")}. Visit /admissions/courses for details.`,
  placement: "MPTC has 95%+ placement rate. 515 offers in 2025-26 from 13+ companies. Highest package: ₹12 LPA.",
  contact: `Address: ${siteConfig.address}. Phone: ${siteConfig.phone}. Email: ${siteConfig.email}`,
  fee: "Fee structure follows Government of Kerala/IHRD norms. SC/ST concessions available. See /admissions/fee-structure.",
  default: "I can help with admissions, courses, placements, fees, and contact info. Try asking about any of these topics!",
};

function getResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("admission") || q.includes("apply")) return faqResponses.admission;
  if (q.includes("course") || q.includes("department") || q.includes("program")) return faqResponses.course;
  if (q.includes("placement") || q.includes("job") || q.includes("company")) return faqResponses.placement;
  if (q.includes("contact") || q.includes("phone") || q.includes("address")) return faqResponses.contact;
  if (q.includes("fee") || q.includes("cost") || q.includes("scholarship")) return faqResponses.fee;
  return faqResponses.default;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hello! I'm MPTC Assistant. Ask me about admissions, courses, placements, or contact details." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [
      ...m,
      { role: "user", text: userMsg },
      { role: "bot", text: getResponse(userMsg) },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all flex items-center justify-center"
        aria-label="Open chatbot"
      >
        <MessageCircle size={24} />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[480px]">
          <div className="bg-primary-500 text-white px-4 py-3 flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">MPTC Assistant</div>
              <div className="text-primary-100 text-xs">AI Help Desk</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm px-3 py-2 rounded-xl max-w-[85%] ${
                  msg.role === "bot"
                    ? "bg-primary-50 text-slate-700 rounded-bl-sm"
                    : "bg-primary-500 text-white ml-auto rounded-br-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about admissions..."
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button onClick={send} className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
