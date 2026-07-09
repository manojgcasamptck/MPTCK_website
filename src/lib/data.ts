import {
  Monitor,
  Cpu,
  Zap,
  CircuitBoard,
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
      { label: "Mandatory Disclosure", href: "/mandatory-disclosure"},
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "Computer Engineering", href: "/departments/computer-engineering" },
      { label: "Computer Science & Technology", href: "/departments/cg" },
      { label: "Electronics & Communication", href: "/departments/ece" },
      { label: "Electronics Engineering", href: "/departments/electronics" },
      { label: "Electrical & Electronics", href: "/departments/ee" },
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
      { label: "Downloads", href: "/downloads" },
    ],
  },
  {
    label: "Students",
    href: "/student-life",
    children: [
      {
        label: "Grievance Redressal",
        href: "/grievance",
      },
      {
        label: "Anti Ragging",
        href: "/anti-ragging",
      },
      { label: "Sports", 
        href: "/facilities/sports", 
      },
      {
        label: "Alumni",
        href: "/alumni",
      },
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
      { label: "Cafeteria", href: "/facilities/cafeteria" },
      { label: "Industry on Campus (IOC)", href: "/facilities/ioc",},
    ],
  },

  { label: "Gallery", href: "/gallery" },
  
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
  hodPhone: string;
  faculty?: {
    name: string;
    phone: string;
  }[];
  established?: string;
}

export const departments: Department[] = [
  {
    slug: "computer-engineering",
    name: "Computer Engineering",
    short: "CT",
    icon: Monitor,
    color: "from-blue-600 to-blue-800",
    image: "/images/ctimg.jpg",
    description:
      "Focuses on Computer softwares, Artificial Intelligence, Machine Learning,Cloud Computing and system administration .The curriculum imparts theoretical and practical dimensions of computing — from algorithms and data structures to database management and web technologies. Students gain hands-on experience with modern programming languages and tools, building skills relevant to software engineering, data analytics, and emerging tech domains. 3-Year Diploma · AICTE Approved",
    //hod: "Head of Department, CT",
      hod: "Manoj G",
      hodPhone: "+91 8848326303",

      faculty: [
        {
          name: "Jayalekshmi V",
          phone: "+91 9745226201",
        },
        {
          name: "Femina H",
          phone: "+91 9747664731",
        },
        {
          name: "Vishnu Babu",
          phone: "+91 9633449667",
        },
        {
          name: "Sreejith S",
          phone: "+91 9544649904",
        },
      ],
      established: "2021",
  },
  {
    slug: "cg",
    name: "Computer Science & Technology",
    short: "CG",
    icon: Cpu,
    color: "from-cyan-600 to-cyan-800",
    image: "/images/cstimg.jpg",
    description:
      "Equips students with a solid foundation in computer hardware, software systems and network infrastructure. The curriculum spans programming, IoT Systems, Cloud Computing and embedded systems — preparing graduates for roles in System development, hardware design, and IT support across industries.3-Year Diploma · AICTE Approved",
      hod: "Muhammed Nijam B",
      hodPhone: "+91 9400071307",

      faculty: [
        {
          name: "Nisha .O",
          phone: "+91 7012307234",
        },
        {
          name: "Jinumol V T",
          phone: "+91 7902636250",
        },
        {
          name: "Rejeena H",
          phone: "+91 9995797742",
        },
        {
          name: "Athira A",
          phone: "+91 7592023792",
        },
      ],
    established: "1997",
  },
  {
    slug: "ece",
    name: "Electronics & Communication Engineering",
    short: "ECE",
    icon: Zap,
    color: "from-indigo-600 to-indigo-800",
    image: "/images/ecimg.jpg",
    description:
      "Bridges electronics and communication systems, offering training in areas such as wireless networks, optical fibre, satellite communication,  embedded electronics, IoT and signal processing. Graduates are well-positioned for careers in telecom, broadcasting, defence electronics, and the rapidly growing IoT and 5G sectors.3-Year Diploma · AICTE Approved",
      hod: "Lunamma Joseph",
      hodPhone: "+91 9495292116",

      faculty: [
        {
          name: "Archana G S",
          phone: "+91 7012209736",
        },
        {
          name: "Surya R",
          phone: "+91 9895497939",
        },
        {
          name: "Grace May S",
          phone: "+91 9809019860",
        },
       
      ],
    established: "1997",
  },
  {
    slug: "electronics",
    name: "Electronics Engineering",
    short: "EL",
    icon: CircuitBoard,
    color: "from-violet-600 to-violet-800",
    image: "/images/elimg.jpg",
    description:
      "Covers the fundamentals of electronic circuits, devices, and systems — including analog and digital electronics,microcontrollers,consumer electronics,mobile communication and industrial automation. Students develop strong technical skills applicable in in electronic circuits, PCB design, instrumentation, and industrial automation systems . 3-Year Diploma · AICTE Approved.",
      hod: "Rajesh R",
      hodPhone: "+91 7907325067",

      faculty: [
        {
          name: "Sobha Kumari G S ",
          phone: "+91 9495623812",
        },
        {
          name: "Shiji S D",
          phone: "+91 7511121204",
        },
        {
          name: "Angel Micheal",
          phone: "+91 9446750400",
        },
      
      ],
    established: "1997",
  },
  {
    slug: "ee",
    name: "Electrical & Electronics Engineering",
    short: "EE",
    icon: Zap,
    color: "from-amber-600 to-amber-800",
    image: "/images/eeeimg.jpg",
    description:
      "Provides comprehensive training in electrical machines, power systems, control engineering, and industrial electronics. Students learn to design, operate, and maintain electrical installations and power distribution systems — with growing relevance in renewable energy, electric vehicles, and smart grid technologies.3-Year Diploma · AICTE Aproved",
      hod: "Mahija M",
      hodPhone: "+91 8590502231",

      faculty: [
        {
          name: "Sincy Thomas",
          phone: "+91 9744564136",
        },
        {
          name: "Devooty A M",
          phone: "+91 7994793194",
        },
        {
          name: "Aswathy A",
          phone: "+91 7736040640",
        },
        {
          name: "Anand S",
          phone: "+91 9645074042",
        },
      ],
    established: "2021",
  },
  {
    slug: "mechanical",
    name: "Mechanical Engineering",
    short: "ME",
    icon: Settings,
    color: "from-orange-600 to-orange-800",
    image: "/images/meimg.jpg",
    description:
      "One of the most versatile engineering disciplines, covering thermodynamics, manufacturing processes, machine design, fluid mechanics, and CAD/CAM. The department prepares students for a wide range of opportunities — from production and maintenance engineering to quality control and advanced manufacturing.3-Year Diploma · AICTE Approved",
      hod: "Sundaresan V L",
      hodPhone: "+91 9496627998",

      faculty: [
        {
          name: "Afsal A",
          phone: "+91 9746886174",
        },
        {
          name: "Paul J Nainan",
          phone: "+91 7994230943",
        },
        {
          name: "Javed Huzain",
          phone: "+91 8943899737",
        },
        {
          name: "Anoop M R",
          phone: "+91 9745978138",
        },
      ],
    established: "2023",
  },
];

export const stats = [
  { label: "Established", value: 1997, suffix: "" },
  { label: "Departments", value: 6, suffix: "" },
  { label: "Students", value: 1000, suffix: "+" },
  { label: "Alumni", value: 5000, suffix: "+" },
  { label: "Placement Rate", value: 100, suffix: "%" },
  { label: "Recruiters", value: 130, suffix: "+" },
];

export const whyChoose = [
  {
    title: "100% Placement Records",
    description: "MPTC has established a strong reputation for successful campus placements through its active industry collaborations and dedicated placement support. Leading companies from diverse sectors regularly participate in recruitment drives, providing 100% placement rate for last 3 years.",
  },
  {
    title: "Well experienced & Qualified Faculty",
    description: "Our faculty members are experienced educators and subject experts committed to academic excellence and student success. Through innovative teaching methodologies, continuous mentoring, and industry-oriented guidance, they help students develop strong technical knowledge, professional skills, and problem-solving abilities.",
  },
  {
    title: "Modern Laboratories",
    description: "MPTC provides state-of-the-art laboratories equipped with modern instruments, software tools, and industry-standard equipment. These facilities enable students to gain extensive hands-on experience and practical exposure in their respective disciplines.",
  },
  {
    title: "Industry Collaboration & Industry On Campus(IOC)",
    description: "Active MoUs with leading companies for internships, training, and placements.Our campus hosts two Industry on Campus (IOC) units that provide students with valuable hands-on industrial experience. One unit focuses on the production of voltage stabilizers and inverters, while the other specializes in software development.",
  },
  {
    title: "Government Controlled Institution",
    description: "As a Government-controlled institution, MPTC upholds the highest standards of transparency, quality, and academic integrity. Students benefit from affordable education, recognized qualifications, experienced faculty, and a structured learning environment governed by established educational policies and regulations.",
  },
  {
    title: "Excellent Academic Results",
    description: "MPTC consistently achieves outstanding academic performance, reflecting the institution's commitment to quality education and student achievement. Through effective teaching, continuous assessment, academic support programs, and a disciplined learning environment, students regularly secure excellent examination results and university ranks.",
  },
];

export const placementStats = [
  { year: "2021-22", placed: 180, companies: 13 },
  { year: "2022-23", placed: 195, companies: 24 },
  { year: "2023-24", placed: 210, companies: 35},
  { year: "2024-25", placed: 225, companies: 65 },
  { year: "2025-26", placed: 515, companies: 170 },
];

export const recruiters = [
  "HLMando", "Experion technologies", "Wipro", "KELTRON", "Centum Electronics", "Tata Electronics",
  "HCL Technologies", "Hyundai Motors", "UST Global", "NKorr",
  "Quiss Corp", "Ashok Leyland", "L&T", "Cadance", "Volga Instruments",
  "NeST Group", "V-Guard", "Sutherland", "TVS Motors", "Schnider Electric","JBM Auto","Tivolt Electric","Madras Engineering Industries",
  "ApolloTyres","Logskim" 
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
    description: "170+ companies conducted campus drive. 515 placement offers received by final year students.",
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
    date: "2025-09-20",
  },
  {
    id: 5,
    title: "Workshop on PCB Design and Fabrication",
    description: "Hands-on certificate workshop using industry EDA tools for Electronics students.",
    category: "workshop",
    date: "2025-08-05",
  },
 
];

export const testimonials = [
  {
    name: "Sreedev B S",
    department: "Computer Engineering",
    batch: 2026,
    content: "MPTC gave me the technical foundation that helped me land my dream job at Experion Technologies. The faculty are incredibly supportive.",
  },
  {
    name: " ",
    department: "Electronics & Communication",
    batch: 2025,
    content: "The ECE labs are world-class. Hands-on IoT experience directly helped my placement at Centum Electronics.",
  },
  {
    name: "Mohammed Asif",
    department: "Mechanical Engineering",
    batch: 2025,
    content: "CAD/CAM lab and workshop facilities are excellent. Placement cell was proactive — placed at an automotive firm.",
  },
  {
    name: "Keerthi Subhash",
    department: "Electronics Engineering",
    batch: 2025,
    content: "Learning modern skills at MPTC was transformative. Faculty encouraged to do real projects which helped me to get placed in SFO Technologies.",
  },
  {
    name: "Ashique",
    department: "Computer Science & Technology",
    batch: 2025,
    content: "Plenty of opportunities to get acquinted with modern technologies in MPTC campus during my studies helped me to get a very good placement in an overseas company.",
  },
  {
    name: "Rahul Menon",
    department: "Electrical & Electronics",
    batch: 2025,
    content: "Power systems lab and industrial training prepared me thoroughly. Schnieder Electric recruited me from campus.",
  },
];

export const galleryImages = [
  { src: "/images/PMD1.jpg", title: "Computers Assembled By the Students", category: "PMD" },
  { src: "/images/artsstage.jpg", title: "College Arts day", category: "events" },
  { src: "/images/badminton.jpg", title: "Badminton State Runner up", category: "sports" },
  { src: "/images/butterfly.jpg", title: "Onam celebrations", category: "events" },
  { src: "/images/chenda.jpg", title: "Student's performance", category: "campus" },
  { src: "/images/dance.jpg", title: "Student's celebrations", category: "campus" },
  { src: "/images/IOCC1.jpg", title: "IOC Inauguration", category: "IOC" },
  { src: "/images/NSS1.jpg", title: "Student's NSS", category: "NSS" },
  { src: "/images/Workshop1.jpg", title: "Technical Workshop", category: "Technical" },
  { src: "/images/staffceleb.jpg", title: "Xmas celebrations", category: "events" },
  { src: "/images/iocimg1.jpg", title: "IOC EWYL News", category: "IOC" },
  { src: "/images/iocimg2.jpg", title: "IOC Placements ", category: "IOC" },
  { src: "/images/posterimg.jpg", title: "Placements Poster 2026 ", category: "campus" },
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
      "Located at Maliyekkal Junction, Edakulangara, the institution has grown into one of Kerala's premier government controlled polytechnic colleges.",
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
    title: "Academic Council",
    content: [
      "Model Polytechnic College Karunagappally functions under the governance of IHRD (Institute of Human Resource Development), Government of Kerala.",
      "The college is affiliated to the Directorate of Technical Education (DTE), Kerala and approved by AICTE.",
    ],
    bullets: [
      "Principal— Chairman",
      "Head of the Departments — Members",
      "Office Superintendent — Member",
      "Representatives from Industry and Alumni",
    ],
  },
  "/about/achievements": {
    title: "Achievements",
    content: [
      "MPTC Karunagappally has consistently achieved excellence in academics, placements, and extracurricular activities.",
    ],
    bullets: [
      "100% placement rate for consecutive years",
      "515 placement offers in 2025-26 campus drive",
      "23 companies visited campus in 2025-26",
      "Consistently above-average board exam results",
      "Active participation in state-level technical fests",
      "NSS and cultural award-winning programs",
    ],
  },
  "/admissions/eligibility": {
    title: "Eligibility Criteria",
    content: [
      "Candidates must have passed SSLC/Equivalent examination from a recognized board.",
      "For LET admissions,the candidates must have passed PLUS TWO Science/Computer/Equivalent or 2 year ITI ",
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
      "Diploma in Computer Engineering (CT)",
      "Diploma in Computer Science & Technology (CST)",
      "Diploma in Electronics & Communication Engineering (EC)",
      "Diploma in Electronics Engineering (EL)",
      "Diploma in Electrical & Electronics Engineering (EEE)",
      "Diploma in Mechanical Engineering (ME)",
    ],
  },
  "/admissions/fee-structure": {
    title: "Fee Structure",
    content: [
      "Fee structure is as per Government of Kerala and IHRD norms for government controlled polytechnic colleges.",
      "Scholarships and fee concessions are available for eligible students as per government guidelines.",
    ],
    bullets: [
      "Tuition fee at the time of admission:₹ 20175. Each semester :₹ 12705",
      "Examination fee as per board norms",
      "SC/ST/OEC/OBH fee concessions available",
      "Merit and need-based scholarships",
    ],
  },
  "/admissions/application-process": {
    title: "Application Process",
    content: [
      "Admissions to MPTC Karunagappally are through the centralized polyadmission.org portal managed by DTE Kerala.",
    ],
    bullets: [
      "Register on www.polyadmission.org portal ",
      "Fill application with preferred course choices",
      "Submit required documents online",
      "Attend counseling as per allotment schedule",
      "Complete admission formalities at college",
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
      "Odd Semester: June – November",
      "Even Semester: December – March",
      "Free Industrial Training in IOC: Second year students",
      "Board Examinations: As per SBTE schedule",
    ],
  },
  "/academics/examination": {
    title: "Examination",
    content: [
      "Internal assessments and end-semester examinations are conducted as per SBTE Kerala guidelines.",
      "Students must maintain minimum 75% attendance to appear for board examinations.",
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
      "Overall Placement Rate: 100%",
      "Highest Package: ₹4LPA",
      "Average Package: ₹2.5 LPA",
      "515 offers in 2025-26 campus drive",
      "170 companies in latest drive",
    ],
  },
  "/placement/recruiters": {
    title: "Our Recruiters",
    content: [
      "Leading companies from IT, electronics,manufacturing,automobile, power and public sector regularly recruit from MPTC campus.",
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
}
