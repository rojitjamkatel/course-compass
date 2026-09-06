export type Course = {
  slug: string;
  code: string;
  name: string;
  fullName: string;
  duration: string;
  category: string;
  tagline: string;
  description: string;
  eligibility: string;
  credits: string;
  intake: string;
  seats: string;
  outcomes: string[];
  years: {
    title: string;
    label: string;
    description: string;
    subjects: string[];
  }[];
};

export const courses: Course[] = [
  {
    slug: "bba",
    code: "BBA",
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    duration: "4 years, 8 semesters",
    category: "Business",
    tagline: "Management, finance and marketing foundations for future entrepreneurs and leaders.",
    description:
      "A four-year professional degree that builds strong foundations in accounting, marketing, finance, and organisational behaviour. Students graduate ready to lead teams, run operations, or launch their own ventures.",
    eligibility: "10+2 or equivalent, 50% aggregate",
    credits: "126 total",
    intake: "August each year",
    seats: "120 / year",
    outcomes: ["Marketing Executive", "Operations Analyst", "Entrepreneur", "Sales Manager"],
    years: [
      {
        title: "Year one",
        label: "Foundation",
        description:
          "Build the shared bedrock every business student needs: accounting, economics, communication, and quantitative methods.",
        subjects: [
          "Principles of Accounting",
          "Microeconomics",
          "Business Communication",
          "Quantitative Methods",
          "Introduction to Business",
        ],
      },
      {
        title: "Year two",
        label: "Core",
        description:
          "Move into functional management areas: finance, marketing, human resources, and operations.",
        subjects: [
          "Financial Management",
          "Marketing Management",
          "Organisational Behaviour",
          "Business Statistics",
          "Cost & Management Accounting",
        ],
      },
      {
        title: "Year three",
        label: "Applied",
        description:
          "Connect theory to practice through case studies, live projects, and a first specialisation choice.",
        subjects: [
          "Strategic Management",
          "Human Resource Management",
          "Business Law",
          "Entrepreneurship",
          "Research Methodology",
        ],
      },
      {
        title: "Year four",
        label: "Capstone",
        description:
          "Finish with advanced strategy, an internship, and a final project that demonstrates job-ready skills.",
        subjects: [
          "International Business",
          "Leadership & Ethics",
          "Project Management",
          "Internship",
          "Final Research Project",
        ],
      },
    ],
  },
  {
    slug: "bicte",
    code: "BICTE",
    name: "BICTE",
    fullName: "Bachelor of Information & Communication Technology Education",
    duration: "4 years, 8 semesters",
    category: "Technology",
    tagline: "Computing, software, and systems training for tomorrow's tech educators and engineers.",
    description:
      "A four-year degree that combines computer science fundamentals with communication technology and pedagogical skills. Graduates leave with a portfolio of real projects and the ability to teach or build software.",
    eligibility: "10+2 or equivalent, 45% aggregate",
    credits: "132 total",
    intake: "August each year",
    seats: "60 / year",
    outcomes: ["Software Developer", "ICT Instructor", "Systems Analyst", "Network Administrator"],
    years: [
      {
        title: "Year one",
        label: "Foundation",
        description:
          "Start with programming basics, digital logic, and the mathematics that underpins computing.",
        subjects: [
          "Programming Fundamentals",
          "Digital Logic",
          "Mathematics for Computing",
          "Computer Applications",
          "Technical English",
        ],
      },
      {
        title: "Year two",
        label: "Core",
        description:
          "Deepen into data structures, databases, networking, and object-oriented design.",
        subjects: [
          "Data Structures & Algorithms",
          "Database Management Systems",
          "Object-Oriented Programming",
          "Computer Networks",
          "Web Technology",
        ],
      },
      {
        title: "Year three",
        label: "Applied",
        description:
          "Apply your skills through software engineering, mobile development, and teaching methodology.",
        subjects: [
          "Software Engineering",
          "Mobile Application Development",
          "Operating Systems",
          "ICT in Education",
          "Instructional Design",
        ],
      },
      {
        title: "Year four",
        label: "Capstone",
        description:
          "Complete advanced electives, a major project, and a teaching practicum or industry internship.",
        subjects: [
          "Artificial Intelligence Fundamentals",
          "Cloud Computing",
          "Project Work",
          "Teaching Practice / Internship",
          "Emerging Technologies",
        ],
      },
    ],
  },
  {
    slug: "bbm",
    code: "BBM",
    name: "BBM",
    fullName: "Bachelor of Business Management",
    duration: "4 years, 8 semesters",
    category: "Management",
    tagline: "People, process, and strategy for mid-level leadership and organisational design.",
    description:
      "A four-year management degree focused on how organisations actually work: leadership, operations, human capital, and strategic decision-making. Designed for students who want to manage people and systems.",
    eligibility: "10+2 or equivalent, 45% aggregate",
    credits: "126 total",
    intake: "August each year",
    seats: "90 / year",
    outcomes: ["Operations Manager", "HR Executive", "Project Coordinator", "Management Trainee"],
    years: [
      {
        title: "Year one",
        label: "Foundation",
        description:
          "Learn the language of business: economics, accounting, communication, and IT fundamentals.",
        subjects: [
          "Business Economics",
          "Financial Accounting",
          "Business Communication",
          "Computer Fundamentals",
          "Business Mathematics",
        ],
      },
      {
        title: "Year two",
        label: "Core",
        description:
          "Explore the core management disciplines: HR, marketing, finance, and production.",
        subjects: [
          "Human Resource Management",
          "Marketing Management",
          "Financial Management",
          "Production & Operations",
          "Business Law",
        ],
      },
      {
        title: "Year three",
        label: "Applied",
        description:
          "Develop analytical and strategic thinking through research, organisational behaviour, and specialisation.",
        subjects: [
          "Organisational Behaviour",
          "Research Methods",
          "Strategic Management",
          "Managerial Economics",
          "Supply Chain Management",
        ],
      },
      {
        title: "Year four",
        label: "Capstone",
        description:
          "Finish with leadership, entrepreneurship, and a practical project or internship.",
        subjects: [
          "Leadership & Change Management",
          "Entrepreneurship Development",
          "International Business",
          "Internship",
          "Final Project",
        ],
      },
    ],
  },
  {
    slug: "bbs",
    code: "BBS",
    name: "BBS",
    fullName: "Bachelor of Business Studies",
    duration: "4 years, 8 semesters",
    category: "Social Science",
    tagline: "Economics, statistics, and policy for analytical and public-sector careers.",
    description:
      "A four-year social-science degree that blends economics, business studies, and quantitative methods. It prepares students for analytical roles in government, banking, research, and civil service.",
    eligibility: "10+2 or equivalent, 45% aggregate",
    credits: "120 total",
    intake: "August each year",
    seats: "90 / year",
    outcomes: ["Banking Officer", "Research Assistant", "Civil Service Candidate", "Economic Analyst"],
    years: [
      {
        title: "Year one",
        label: "Foundation",
        description:
          "Establish foundations in economics, accounting, and English for academic and professional writing.",
        subjects: [
          "Microeconomics",
          "Macroeconomics",
          "Financial Accounting",
          "English Composition",
          "Business Mathematics",
        ],
      },
      {
        title: "Year two",
        label: "Core",
        description:
          "Build quantitative strength with statistics, cost accounting, and business communication.",
        subjects: [
          "Business Statistics",
          "Cost & Management Accounting",
          "Business Communication",
          "Nepalese Economy",
          "Business Law",
        ],
      },
      {
        title: "Year three",
        label: "Applied",
        description:
          "Apply economic theory to policy, finance, and development challenges.",
        subjects: [
          "Money & Banking",
          "Public Finance",
          "Development Economics",
          "Financial Institutions",
          "Taxation",
        ],
      },
      {
        title: "Year four",
        label: "Capstone",
        description:
          "Complete advanced economics, research methods, and a dissertation or internship.",
        subjects: [
          "International Economics",
          "Research Methodology",
          "Project Work / Dissertation",
          "Internship",
          "Contemporary Economic Issues",
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function searchCourses(query: string): Course[] {
  const q = query.toLowerCase().trim();
  if (!q) return courses;
  return courses.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.fullName.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.tagline.toLowerCase().includes(q) ||
      c.years.some((y) => y.subjects.some((s) => s.toLowerCase().includes(q)))
  );
}
