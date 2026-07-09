"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { departments } from "@/lib/data";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
  quickReplies?: string[];
};

/**
 * Cute little robot-girl face used as Mitra's avatar — a simple inline SVG
 * so there's no extra image asset to host/optimize. `size` controls both
 * width and height in pixels. Gradient ids are namespaced per-instance
 * (via useId) since this component renders more than once on screen at
 * the same time (launcher button + chat header).
 */
function MitraAvatar({ size = 28, className = "" }: { size?: number; className?: string }) {
  const uid = useId().replace(/[:]/g, "");
  const headId = `mitraHead-${uid}`;
  const cheekId = `mitraCheek-${uid}`;
  const eyeId = `mitraEye-${uid}`;
  const bowId = `mitraBow-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Mitra avatar"
    >
      <defs>
        <linearGradient id={headId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FCE7F3" />
        </linearGradient>
        <radialGradient id={cheekId}>
          <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F9A8D4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={eyeId} cx="35%" cy="30%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </radialGradient>
        <linearGradient id={bowId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
      </defs>

      {/* soft drop shadow under the head */}
      <ellipse cx="32" cy="55" rx="19" ry="3" fill="#EC4899" opacity="0.12" />

      {/* antenna with sparkle tip */}
      <line x1="32" y1="7" x2="32" y2="15" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" />
      <g transform="translate(32,5)">
        <path
          d="M0 -4 L1.3 -1.3 L4 0 L1.3 1.3 L0 4 L-1.3 1.3 L-4 0 L-1.3 -1.3 Z"
          fill="#FBCFE8"
        />
        <circle r="1.6" fill="#fff" />
      </g>

      {/* head */}
      <rect
        x="9"
        y="14"
        width="46"
        height="39"
        rx="17"
        fill={`url(#${headId})`}
        stroke="#F472B6"
        strokeWidth="2"
      />
      {/* subtle top-left gloss */}
      <path d="M16 22 Q22 16 30 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* side "ear" bobbles */}
      <circle cx="8" cy="33" r="4.5" fill="#F9A8D4" />
      <circle cx="8" cy="33" r="1.6" fill="#fff" opacity="0.7" />
      <circle cx="56" cy="33" r="4.5" fill="#F9A8D4" />
      <circle cx="56" cy="33" r="1.6" fill="#fff" opacity="0.7" />

      {/* hair fringe */}
      <path d="M16 19 Q32 6 48 19" fill="none" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 16 Q24 11 27 15" fill="none" stroke="#F472B6" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M37 15 Q40 11 43 16" fill="none" stroke="#F472B6" strokeWidth="1.6" strokeLinecap="round" />

      {/* bow */}
      <g transform="translate(32,13)">
        <path d="M-7 -3 Q-1 0 -7 3 Q-8 0 -7 -3 Z" fill={`url(#${bowId})`} />
        <path d="M7 -3 Q1 0 7 3 Q8 0 7 -3 Z" fill={`url(#${bowId})`} />
        <circle r="2" fill="#BE185D" />
      </g>

      {/* blush */}
      <circle cx="16" cy="41" r="5" fill={`url(#${cheekId})`} />
      <circle cx="48" cy="41" r="5" fill={`url(#${cheekId})`} />

      {/* eyes */}
      <circle cx="24" cy="34" r="5.2" fill={`url(#${eyeId})`} />
      <circle cx="40" cy="34" r="5.2" fill={`url(#${eyeId})`} />
      <circle cx="24" cy="34" r="5.2" fill="none" stroke="#0369A1" strokeWidth="0.6" opacity="0.4" />
      <circle cx="40" cy="34" r="5.2" fill="none" stroke="#0369A1" strokeWidth="0.6" opacity="0.4" />
      <circle cx="25.8" cy="32" r="1.6" fill="#fff" />
      <circle cx="41.8" cy="32" r="1.6" fill="#fff" />
      <circle cx="22.5" cy="36" r="0.8" fill="#fff" opacity="0.8" />
      <circle cx="38.5" cy="36" r="0.8" fill="#fff" opacity="0.8" />

      {/* tiny eyelash flicks for extra cuteness */}
      <path d="M19.5 30 l-2 -1.5" stroke="#0369A1" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M44.5 30 l2 -1.5" stroke="#0369A1" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* smile */}
      <path d="M25 44 Q32 50 39 44" fill="none" stroke="#DB2777" strokeWidth="2.3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * -----------------------------------------------------------------------
 * FAQ KNOWLEDGE BASE
 * -----------------------------------------------------------------------
 * This is a rule-based (not AI-generated) chatbot on purpose: every answer
 * below is a fixed, reviewed string, so the bot can never "hallucinate" a
 * wrong fact for students/parents. To keep answers accurate, only edit the
 * text in this file — don't wire this up to a free-form AI model unless
 * you also add a review/citation step.
 *
 * Each intent has:
 *  - keywords: words/phrases that should trigger it (lowercase)
 *  - response: the fixed reply text (can reference siteConfig/departments)
 *  - quickReplies: optional follow-up chips shown after the answer
 * -----------------------------------------------------------------------
 */

type Intent = {
  id: string;
  keywords: string[];
  response: string;
  quickReplies?: string[];
};

const courseList = departments.map((d) => d.short).join(", ");

const intents: Intent[] = [
  {
    id: "admission",
    keywords: [
      "admission", "admissions", "apply", "application", "how to join",
      "how to get in", "enroll", "enrollment", "polycap", "sslc", "let",
      "lateral entry", "second year admission",
    ],
    response: `Admissions are through the POLYCAP portal (polycap.kerala.gov.in).
• 1st year: SSLC pass required.
• 2nd year (Lateral Entry/LET): +2 Science/Computer or VHSC pass required.
For step-by-step help, call ${siteConfig.phone} or email ${siteConfig.email}.`,
    quickReplies: ["What courses are offered?", "What is the fee structure?", "Eligibility for 1st year"],
  },
  {
    id: "eligibility",
    keywords: ["eligibility", "eligible", "minimum marks", "qualify", "qualification needed"],
    response: `Eligibility:
• 1st year Diploma: Pass in SSLC (10th standard).
• 2nd year (Lateral Entry): Pass in +2 Science/Computer or VHSC.
Seat allotment is done through POLYCAP based on merit and reservation norms.`,
    quickReplies: ["How do I apply?", "Fee structure", "Contact admissions office"],
  },
  {
    id: "course",
    keywords: [
      "course", "courses", "department", "departments", "program", "programs",
      "branch", "branches", "diploma", "stream", "specialization",
    ],
    response: `We offer ${departments.length} diploma programs: ${courseList}. Full syllabus, duration and eligibility for each is on the /admissions/courses page.`,
    quickReplies: ["Placement details", "Fee structure", "How do I apply?"],
  },
  {
    id: "placement",
    keywords: [
      "placement", "placements", "job", "jobs", "company", "companies",
      "career", "salary", "package", "recruit", "recruitment", "internship",
    ],
    response: `MPTC has a strong placement record: 515+ offers in 2025–26 from 90+ companies, with a 100%+ placement rate for eligible students and a highest package of ₹4 LPA. The placement cell also arranges internships and skill-training sessions.`,
    quickReplies: ["Which courses have best placements?", "Contact placement cell"],
  },
  {
    id: "fee",
    keywords: [
      "fee", "fees", "cost", "tuition", "scholarship", "scholarships",
      "concession", "sc st", "ews", "payment", "how much does it cost",
    ],
    response: `Fees follow Government of Kerala / IHRD norms and vary by course. SC/ST and other eligible-category concessions and scholarships are available. See /admissions/fee-structure for the exact break-up, or call ${siteConfig.phone} for help.`,
    quickReplies: ["How do I apply?", "Contact office"],
  },
  {
    id: "contact",
    keywords: [
      "contact", "phone", "number", "call", "email", "mail", "address",
      "location", "where is", "reach you", "office",
    ],
    response: `Address: ${siteConfig.address}
Phone: ${siteConfig.phone}
Email: ${siteConfig.email}
Office hours: Monday–Saturday, 10:00 AM – 5:00 PM (closed on government holidays).`,
    quickReplies: ["Get directions", "Admissions info"],
  },
  {
    id: "timing",
    keywords: [
      "timing", "timings", "college hours", "office hours", "open", "closed",
      "working days", "holiday", "holidays", "vacation",
    ],
    response: `College office hours are Monday–Saturday, 10:00 AM – 5:00 PM, closed on Sundays and government holidays. Class timings and the academic calendar are published on the college notice board and website.`,
    quickReplies: ["Contact info", "Admissions info"],
  },
  {
    id: "exam",
    keywords: [
      "exam", "exams", "examination", "result", "results", "revaluation",
      "hall ticket", "supplementary", "kbte",
    ],
    response: `Examinations are conducted under the Kerala Board of Technical Education (KBTE). Hall tickets, timetables, and results are released on the official KBTE portal and shared on our notice board. For a specific exam query, please contact the exam cell at ${siteConfig.phone}.`,
    quickReplies: ["Contact office", "Admissions info"],
  },
  {
    id: "hostel",
    keywords: ["hostel", "accommodation", "stay", "boarding", "mess"],
    response: `For hostel/accommodation availability and application details, please contact the college office directly at ${siteConfig.phone} or ${siteConfig.email}, as facilities can vary by academic year.`,
    quickReplies: ["Contact office", "Admissions info"],
  },
  {
    id: "transport",
    keywords: ["bus", "transport", "how to reach", "route", "directions"],
    response: `For the best route to reach us, please check: ${siteConfig.address}. You can also call ${siteConfig.phone} for directions from your specific location.`,
    quickReplies: ["Contact office"],
  },
  {
    id: "documents",
    keywords: [
      "document", "documents", "certificate", "certificates", "required documents",
      "papers needed", "id proof",
    ],
    response: `Typically required at admission: SSLC/+2 certificate, transfer certificate, conduct certificate, community/income certificate (if applicable for concessions), and recent photographs. Exact requirements are confirmed during POLYCAP counselling — call ${siteConfig.phone} to confirm your specific case.`,
    quickReplies: ["Admissions info", "Fee structure"],
  },
  {
    id: "ragging",
    keywords: ["ragging", "anti ragging", "harassment", "bullying"],
    response: `MPTC has a strict zero-tolerance anti-ragging policy in line with UGC/AICTE regulations. Any incident can be reported immediately to the Anti-Ragging Committee or the Principal's office at ${siteConfig.phone}.`,
  },
  {
    id: "about",
    keywords: ["about", "what is mptc", "history", "recognition", "affiliation", "affiliated"],
    response: `MPTC is a Government Polytechnic College offering diploma programs affiliated to the Kerala Board of Technical Education (KBTE), under IHRD/Government of Kerala norms. Visit the /about page for our history, vision, and infrastructure details.`,
    quickReplies: ["Courses offered", "Placements"],
  },
];

// Small set of common misspellings / shorthand normalized before matching
const normalizeMap: Record<string, string> = {
  "asistant": "assistant",
  "addmission": "admission",
  "addmissions": "admissions",
  "plcement": "placement",
  "colage": "college",
};

function normalize(text: string): string {
  let q = text.toLowerCase().trim();
  Object.entries(normalizeMap).forEach(([wrong, right]) => {
    q = q.replace(new RegExp(wrong, "g"), right);
  });
  return q;
}

const GREETING_WORDS = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "namaste"];
const THANKS_WORDS = ["thank", "thanks", "thank you", "great", "ok thanks", "okay thanks"];

const FALLBACK_QUICK_REPLIES = [
  "Admissions process",
  "Courses offered",
  "Placement record",
  "Fee structure",
  "Contact details",
];

function getResponse(rawInput: string): { text: string; quickReplies?: string[] } {
  const q = normalize(rawInput);

  if (GREETING_WORDS.some((w) => q === w || q.startsWith(w + " ") || q.includes(w))) {
    return {
      text: "Hello! I'm Mitra 👋 I can help with admissions, courses, fees, placements, exams, hostel, and contact details. What would you like to know?",
      quickReplies: FALLBACK_QUICK_REPLIES,
    };
  }

  if (THANKS_WORDS.some((w) => q.includes(w))) {
    return { text: `You're welcome! Feel free to ask anything else, or reach the office directly at ${siteConfig.phone}.` };
  }

  // Score each intent by number of matched keywords (longer keyword phrases weigh more)
  let bestIntent: Intent | null = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (q.includes(kw)) {
        score += kw.split(" ").length; // multi-word matches score higher / more specific
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && bestScore > 0) {
    return { text: bestIntent.response, quickReplies: bestIntent.quickReplies };
  }

  // Safe fallback — never guesses, always points to a human for anything unrecognized
  return {
    text: `I couldn't find an exact answer to that. I can help with admissions, courses, fees, placements, exams, hostel, and contact info. For anything else, please reach us directly at ${siteConfig.phone} or ${siteConfig.email}.`,
    quickReplies: FALLBACK_QUICK_REPLIES,
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hello! I'm Mitra, your assistant to help you with admissions, courses, placements, fees, or contact details.",
      quickReplies: FALLBACK_QUICK_REPLIES,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCaption, setShowCaption] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendText = (text: string) => {
    const userMsg = text.trim();
    if (!userMsg) return;

    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Small delay so the bot doesn't feel like it's just echoing instantly —
    // purely cosmetic, the answer itself is already fully determined above.
    window.setTimeout(() => {
      const { text: replyText, quickReplies } = getResponse(userMsg);
      setMessages((m) => [...m, { role: "bot", text: replyText, quickReplies }]);
      setIsTyping(false);
    }, 400);
  };

  const send = () => sendText(input);

  return (
    <>
      {!open && showCaption && (
        <div className="fixed bottom-8 right-24 z-50 flex items-center gap-2 bg-white text-slate-700 text-sm px-3 py-2 rounded-xl shadow-lg border border-gray-100 animate-in fade-in slide-in-from-right-2">
          <span>Hi, I'm Mitra. How can I help you?</span>
          <button
            onClick={() => setShowCaption(false)}
            aria-label="Dismiss message"
            className="text-slate-400 hover:text-slate-600"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <button
        onClick={() => {
          setOpen(true);
          setShowCaption(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-500 rounded-full shadow-lg hover:bg-primary-600 transition-all flex items-center justify-center overflow-hidden"
        aria-label="Open chatbot"
      >
        <MitraAvatar size={36} />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[560px]">
          <div className="bg-primary-500 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shrink-0">
                <MitraAvatar size={26} />
              </div>
              <div>
                <div className="font-semibold text-sm">MPTC Assistant</div>
                <div className="text-primary-100 text-xs">Mitra · Help Desk</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px]">
            {messages.map((msg, i) => (
              <div key={i} className="space-y-2">
                <div
                  className={`text-sm px-3 py-2 rounded-xl max-w-[85%] whitespace-pre-line ${
                    msg.role === "bot"
                      ? "bg-primary-50 text-slate-700 rounded-bl-sm"
                      : "bg-primary-500 text-white ml-auto rounded-br-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "bot" && msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => sendText(qr)}
                        className="text-xs px-2.5 py-1 rounded-full border border-primary-200 text-primary-600 hover:bg-primary-50 transition-colors"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="text-sm px-3 py-2 rounded-xl max-w-[60%] bg-primary-50 text-slate-400 rounded-bl-sm">
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                </span>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about admissions..."
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
