import {
  Monitor,
  Cpu,
  Zap,
  FlaskConical,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "History", href: "/about/history" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Principal's Message", href: "/about/principal-message" },
      { label: "Governing Body", href: "/about/governing-body" },
      { label: "Achievements", href: "/about/achievements" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "Computer Engineering", href: "/departments/computer-engineering" },
      { label: "Computer Science & Technology", href: "/departments/cst" },
      { label: "Electronics & Communication", href: "/departments/ece" },
      { label: "Electronics Engineering", href: "/departments/electronics" },
      { label: "Electrical & Electronics", href: "/departments/eee" },
      { label: "Mechanical Engineering", href: "/departments/mechanical" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Eligibility", href: "/admissions/eligibility" },
      { label: "Courses Offered", href: "/admissions/courses" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
      { label: "Application Process", href: "/admissions/application-process" },
      { label: "Download Prospectus", href: "/admissions/prospectus" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Academic Calendar", href: "/academics/calendar" },
      { label: "Examination", href: "/academics/examination" },
      { label: "Timetable", href: "/academics/timetable" },
    ],
  },
  {
    label: "Training & Placement",
    href: "/placement",
    children: [
      { label: "Placement Statistics", href: "/placement/statistics" },
      { label: "Recruiters", href: "/placement/recruiters" },
      { label: "Student Success Stories", href: "/placement/success-stories" },
      { label: "Placement Cell", href: "/placement/cell" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    children: [
      { label: "Library", href: "/facilities/library" },
      { label: "Laboratories", href: "/facilities/laboratories" },
      { label: "Workshops", href: "/facilities/workshops" },
      { label: "Smart Classrooms", href: "/facilities/smart-classrooms" },
      { label: "Hostel", href: "/facilities/hostel" },
      { label: "Cafeteria", href: "/facilities/cafeteria" },
      { label: "Sports", href: "/facilities/sports" },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    children: [
      { label: "Clubs", href: "/student-life/clubs" },
      { label: "NSS", href: "/student-life/nss" },
      { label: "Arts & Sports", href: "/student-life/arts-sports" },
      { label: "Technical Fest", href: "/student-life/technical-fest" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export interface Department {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  color: string;
  image: string;
  description: string;
  hod?: string;
  established?: string;
}

export const departments: Department[] = [
  {
    slug: "computer-engineering",
    name: "Computer Engineering",
    short: "CE",
    icon: Monitor,
    color: "from-blue-600 to-blue-800",
    image: "/images/MPTC1.jpeg",
    description:
      "Focuses on computer hardware, networking, and system administration with hands-on lab training aligned to industry standards.",
    hod: "Head of Department, CE",
    established: "1997",
  },
  {
    slug: "cst",
    name: "Computer Science & Technology",
    short: "CST",
    icon: Cpu,
    color: "from-cyan-600 to-cyan-800",
    image: "/images/MPTC2.jpeg",
    description:
      "Covers software development, databases, web technologies, and emerging IT skills for modern tech careers.",
    hod: "Head of Department, CST",
    established: "2005",
  },
  {
    slug: "ece",
    name: "Electronics & Communication Engineering",
    short: "ECE",
    icon: Zap,
    color: "from-indigo-600 to-indigo-800",
    image: "/images/MPTC3.jpeg",
    description:
      "Training in communication systems, embedded electronics, IoT, and signal processing with advanced lab facilities.",
    hod: "Head of Department, ECE",
    established: "1997",
  },
  {
    slug: "electronics",
    name: "Electronics Engineering",
    short: "EE",
    icon: FlaskConical,
    color: "from-violet-600 to-violet-800",
    image: "/images/MPTC1.jpeg",
    description:
      "Specialized program in electronic circuits, PCB design, instrumentation, and industrial automation systems.",
    hod: "Head of Department, EE",
    established: "1997",
  },
  {
    slug: "eee",
    name: "Electrical & Electronics Engineering",
    short: "EEE",
    icon: Zap,
    color: "from-amber-600 to-amber-800",
    image: "/images/MPTC2.jpeg",
    description:
      "Comprehensive training in power systems, electrical machines, control systems, and renewable energy technologies.",
    hod: "Head of Department, EEE",
    established: "1997",
  },
  {
    slug: "mechanical",
    name: "Mechanical Engineering",
    short: "ME",
    icon: Settings,
    color: "from-orange-600 to-orange-800",
    image: "/images/MPTC3.jpeg",
    description:
      "CAD/CAM, manufacturing processes, thermal engineering, and workshop practice for mechanical industry readiness.",
    hod: "Head of Department, ME",
    established: "2010",
  },
];

export const stats = [
  { label: "Established", value: 1997, suffix: "" },
  { label: "Departments", value: 6, suffix: "" },
  { label: "Students", value: 1000, suffix: "+" },
  { label: "Alumni", value: 5000, suffix: "+" },
  { label: "Placement Rate", value: 95, suffix: "%" },
  { label: "Recruiters", value: 100, suffix: "+" },
];

export const whyChoose = [
  {
    title: "Excellent Placement Records",
    description: "95%+ placement rate with 100+ companies visiting campus annually.",
  },
  {
    title: "Highly Qualified Faculty",
    description: "Experienced faculty with industry and academic expertise across all departments.",
  },
  {
    title: "Modern Laboratories",
    description: "State-of-the-art labs with industry-grade equipment and software tools.",
  },
  {
    title: "Industry Collaboration",
    description: "Active MoUs with leading companies for internships, training, and placements.",
  },
  {
    title: "Government Institution",
    description: "IHRD-managed, DTE Kerala affiliated, and AICTE approved polytechnic college.",
  },
  {
    title: "Excellent Academic Results",
    description: "Consistently strong board examination results since establishment in 1997.",
  },
];

export const placementStats = [
  { year: "2021-22", placed: 180, companies: 35 },
  { year: "2022-23", placed: 195, companies: 42 },
  { year: "2023-24", placed: 210, companies: 48 },
  { year: "2024-25", placed: 225, companies: 52 },
  { year: "2025-26", placed: 515, companies: 13 },
];

export const recruiters = [
  "Infosys", "TCS", "Wipro", "KELTRON", "KSEB", "BPCL",
  "HCL Technologies", "Mphasis", "UST Global", "IBS Software",
  "Quest Global", "Cognizant", "L&T", "FACT", "CPCL",
  "NeST Group", "V-Guard", "Sutherland", "Allianz", "RR Donnelley",
];

export const events = [
  {
    id: 1,
    title: "Admissions Open 2025-26 — Apply Now!",
    description: "Applications open for Diploma programs in all 6 departments through POLYCAP portal.",
    category: "admission",
    date: "2025-07-31",
  },
  {
    id: 2,
    title: "Campus Placement Drive 2025-26",
    description: "13+ companies conducted campus drive. 515 placement offers received by final year students.",
    category: "placement",
    date: "2026-04-10",
  },
  {
    id: 3,
    title: "National Seminar on Industry 4.0",
    description: "Two-day seminar with experts from ISRO, DRDO and leading IT companies on AI, IoT & Robotics.",
    category: "seminar",
    date: "2025-08-15",
  },
  {
    id: 4,
    title: "TechFest 2026 — Annual Technical Festival",
    description: "3 days of innovation, competitions, workshops, and cultural events.",
    category: "technical_fest",
    date: "2026-09-20",
  },
  {
    id: 5,
    title: "Workshop on PCB Design and Fabrication",
    description: "Hands-on certificate workshop using industry EDA tools for Electronics students.",
    category: "workshop",
    date: "2025-08-05",
  },
  {
    id: 6,
    title: "Board Examination Notification",
    description: "DTE Kerala diploma examination schedule and guidelines for all semesters.",
    category: "examination",
    date: "2025-11-01",
  },
];

export const testimonials = [
  {
    name: "Arun Kumar",
    department: "Computer Engineering",
    batch: 2022,
    content: "MPTC gave me the technical foundation that helped me land my dream job at Infosys. The faculty are incredibly supportive.",
  },
  {
    name: "Priya Nair",
    department: "Electronics & Communication",
    batch: 2023,
    content: "The ECE labs are world-class. Hands-on IoT experience directly helped my placement at KELTRON.",
  },
  {
    name: "Mohammed Asif",
    department: "Mechanical Engineering",
    batch: 2022,
    content: "CAD/CAM lab and workshop facilities are excellent. Placement cell was proactive — placed at an automotive firm.",
  },
  {
    name: "Sneha Suresh",
    department: "CST",
    batch: 2023,
    content: "Learning modern IT skills at MPTC was transformative. Faculty encouraged real projects.",
  },
  {
    name: "Rahul Menon",
    department: "Electrical & Electronics",
    batch: 2021,
    content: "Power systems lab and industrial training prepared me thoroughly. KSEB recruited me from campus.",
  },
];

export const galleryImages = [
  { src: "/images/MPTC1.jpeg", title: "Campus Building", category: "campus" },
  { src: "/images/MPTC2.jpeg", title: "College Front View", category: "campus" },
  { src: "/images/MPTC3.jpeg", title: "Campus Aerial View", category: "campus" },
  { src: "/images/brochure.jpeg", title: "Admission Brochure", category: "events" },
  { src: "https://mptkarunagappally.ihrd.ac.in/images/WhatsApp-Image-2023-06-14-at-10.28.52-AM.jpeg", title: "Campus Event", category: "events" },
  { src: "https://mptkarunagappally.ihrd.ac.in/images/edugreev.jpg", title: "EduGreev Program", category: "events" },
];

export const categoryColors: Record<string, string> = {
  admission: "bg-green-100 text-green-700",
  placement: "bg-blue-100 text-blue-700",
  workshop: "bg-amber-100 text-amber-700",
  seminar: "bg-purple-100 text-purple-700",
  technical_fest: "bg-red-100 text-red-700",
  examination: "bg-teal-100 text-teal-700",
  news: "bg-gray-100 text-gray-700",
};

export type PageContent = {
  title: string;
  subtitle?: string;
  content: string[];
  bullets?: string[];
};

export const pageContents: Record<string, PageContent> = {
  "/about/history": {
    title: "Our History",
    subtitle: "A legacy of technical excellence since 1997",
    content: [
      "Model Polytechnic College Karunagappally was established in 1997 under the Institute of Human Resource Development (IHRD), Government of Kerala.",
      "Located at Maliyekkal Junction, Edakulangara, the institution has grown into one of Kerala's premier government polytechnic colleges.",
      "Over nearly three decades, MPTC has produced thousands of skilled diploma engineers who serve across India and abroad.",
    ],
  },
  "/about/vision-mission": {
    title: "Vision & Mission",
    content: [
      "Vision: To be a centre of excellence in technical education, producing competent professionals who contribute to national development.",
      "Mission: To provide quality diploma education through innovative teaching, industry collaboration, and holistic student development.",
      "We strive to make students technically competent, socially committed, and ethically strong citizens of tomorrow.",
    ],
  },
  "/about/principal-message": {
    title: "Principal's Message",
    content: [
      "Welcome to Model Polytechnic College Karunagappally — a premier Government controlled institution under IHRD, Kerala.",
      "Since 1997, we have maintained an unwavering commitment to quality technical education, producing graduates who are job-ready and future-ready.",
      "Our state-of-the-art laboratories, experienced faculty, and strong industry connections ensure every student receives holistic education.",
    ],
  },
  "/about/governing-body": {
    title: "Governing Body",
    content: [
      "Model Polytechnic College Karunagappally functions under the governance of IHRD (Institute of Human Resource Development), Government of Kerala.",
      "The college is affiliated to the Directorate of Technical Education (DTE), Kerala and approved by AICTE.",
    ],
    bullets: [
      "Director, IHRD — Chairman",
      "Principal — Member Secretary",
      "Heads of Departments — Members",
      "Representatives from Industry and Alumni",
    ],
  },
  "/about/achievements": {
    title: "Achievements",
    content: [
      "MPTC Karunagappally has consistently achieved excellence in academics, placements, and extracurricular activities.",
    ],
    bullets: [
      "95%+ placement rate for consecutive years",
      "515 placement offers in 2025-26 campus drive",
      "13+ companies visited campus in 2025-26",
      "Consistently above-average board exam results",
      "Active participation in state-level technical fests",
      "NSS and cultural award-winning programs",
    ],
  },
  "/admissions/eligibility": {
    title: "Eligibility Criteria",
    content: [
      "Candidates must have passed SSLC/Equivalent examination from a recognized board.",
      "Age limit and other criteria as prescribed by DTE Kerala for polytechnic admissions.",
    ],
    bullets: [
      "SSLC pass with minimum marks as per DTE Kerala norms",
      "Kerala State domicile preferred for state quota seats",
      "Valid POLYCAP registration for centralized admission",
      "Reservation policies of Government of Kerala applicable",
    ],
  },
  "/admissions/courses": {
    title: "Courses Offered",
    content: [
      "MPTC offers 3-year Diploma programs in six engineering disciplines, affiliated to DTE Kerala and approved by AICTE.",
    ],
    bullets: [
      "Diploma in Computer Engineering (CE)",
      "Diploma in Computer Science & Technology (CST)",
      "Diploma in Electronics & Communication Engineering (ECE)",
      "Diploma in Electronics Engineering (EE)",
      "Diploma in Electrical & Electronics Engineering (EEE)",
      "Diploma in Mechanical Engineering (ME)",
    ],
  },
  "/admissions/fee-structure": {
    title: "Fee Structure",
    content: [
      "Fee structure is as per Government of Kerala and IHRD norms for government polytechnic colleges.",
      "Scholarships and fee concessions are available for eligible students as per government guidelines.",
    ],
    bullets: [
      "Tuition fee as per DTE Kerala notification",
      "Examination fee as per board norms",
      "SC/ST/OEC fee concessions available",
      "Merit and need-based scholarships",
    ],
  },
  "/admissions/application-process": {
    title: "Application Process",
    content: [
      "Admissions to MPTC Karunagappally are through the centralized POLYCAP portal managed by DTE Kerala.",
    ],
    bullets: [
      "Register on POLYCAP portal (polycap.kerala.gov.in)",
      "Fill application with preferred course choices",
      "Submit required documents online",
      "Attend counseling as per allotment schedule",
      "Complete admission formalities at college",
    ],
  },
  "/admissions/prospectus": {
    title: "Download Prospectus",
    content: [
      "Download the official admission brochure for detailed information about courses, facilities, and admission procedures.",
    ],
  },
  "/academics/curriculum": {
    title: "Curriculum",
    content: [
      "All diploma programs follow the curriculum prescribed by DTE Kerala, designed to meet industry requirements.",
      "Programs include theory, practical labs, project work, and industrial training components.",
    ],
  },
  "/academics/calendar": {
    title: "Academic Calendar",
    content: [
      "Academic year follows the odd/even semester pattern as prescribed by DTE Kerala.",
    ],
    bullets: [
      "Odd Semester: July – December",
      "Even Semester: January – June",
      "Industrial Training: Final year students",
      "Board Examinations: As per DTE schedule",
    ],
  },
  "/academics/examination": {
    title: "Examination",
    content: [
      "Internal assessments and end-semester examinations are conducted as per DTE Kerala guidelines.",
      "Students must maintain minimum attendance and internal marks to appear for board examinations.",
    ],
  },
  "/academics/timetable": {
    title: "Timetable",
    content: [
      "Class timetables are published at the beginning of each semester and displayed on department notice boards.",
      "Students can access timetables through the student portal or department offices.",
    ],
  },
  "/placement/statistics": {
    title: "Placement Statistics",
    content: [
      "MPTC Karunagappally maintains an outstanding placement record with consistent year-on-year growth.",
    ],
    bullets: [
      "Overall Placement Rate: 95%+",
      "Highest Package: ₹12 LPA",
      "Average Package: ₹3.5 LPA",
      "515 offers in 2025-26 campus drive",
      "13+ companies in latest drive",
    ],
  },
  "/placement/recruiters": {
    title: "Our Recruiters",
    content: [
      "Leading companies from IT, manufacturing, power, and public sector regularly recruit from MPTC campus.",
    ],
  },
  "/placement/success-stories": {
    title: "Student Success Stories",
    content: [
      "Our alumni have built successful careers in top companies across India and abroad.",
    ],
  },
  "/placement/cell": {
    title: "Placement Cell",
    content: [
      "The Training & Placement Cell coordinates campus recruitment, industry training, and career guidance.",
      "Contact the placement cell for internship and recruitment related queries.",
    ],
    bullets: [
      "Pre-placement training programs",
      "Mock interviews and aptitude coaching",
      "Industry expert sessions",
      "Internship coordination",
    ],
  },
  "/facilities/library": {
    title: "Library",
    content: [
      "Well-stocked library with technical books, journals, e-resources, and reference materials for all departments.",
    ],
  },
  "/facilities/laboratories": {
    title: "Laboratories",
    content: [
      "Department-wise laboratories equipped with modern instruments and industry-standard software.",
    ],
  },
  "/facilities/workshops": {
    title: "Workshops",
    content: [
      "Mechanical and electrical workshops with CNC, lathe, welding, and fabrication facilities for hands-on training.",
    ],
  },
  "/facilities/smart-classrooms": {
    title: "Smart Classrooms",
    content: [
      "Digital classrooms with projectors, smart boards, and audio-visual aids for enhanced learning.",
    ],
  },
  "/facilities/hostel": {
    title: "Hostel",
    content: [
      "Separate hostel facilities available for male and female students with adequate amenities.",
    ],
  },
  "/facilities/cafeteria": {
    title: "Cafeteria",
    content: [
      "Hygienic cafeteria serving nutritious meals and snacks for students and staff.",
    ],
  },
  "/facilities/sports": {
    title: "Sports",
    content: [
      "Sports grounds and facilities for football, cricket, volleyball, athletics, and indoor games.",
    ],
  },
  "/student-life/clubs": {
    title: "Clubs & Activities",
    content: [
      "Technical clubs, coding clubs, robotics club, and cultural associations active throughout the year.",
    ],
  },
  "/student-life/nss": {
    title: "NSS",
    content: [
      "National Service Scheme unit actively engages students in community service and social outreach programs.",
    ],
  },
  "/student-life/arts-sports": {
    title: "Arts & Sports",
    content: [
      "Annual arts festival and sports meet with participation in university and state-level competitions.",
    ],
  },
  "/student-life/technical-fest": {
    title: "Technical Fest",
    content: [
      "Annual TechFest featuring project exhibitions, coding competitions, robotics events, and expert talks.",
    ],
  },
};
