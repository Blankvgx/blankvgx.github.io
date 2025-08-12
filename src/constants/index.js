import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  ups,
  mobalytics,
  hft,
  wix,
  routinelogic,
  usrmanagement,
  moviepunk,
  serenity,
  vitalvoyage,
  deepedu,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "ISM Intern",
    company_name: "UPS",
    icon: ups,
    iconBg: "#161329",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Deployed Looker and Google Cloud Run to automate manual touch points, resulting in ~$15,000 per Month in cost savings in manual effort.",
      "Created 2 scalable projects that can be adopted throughout the organization, that cut task time by 90% and boosted efficiency by 1000%.",
      "Utilized Azure DevOps for task management, created 10 tasks in user stories, and practiced SoD to keep workflow organized and maintained.",
      "Gained enterprise level experience in over 7 cloud technologies and worked closely with the DevOps Lifecycle to manage all projects."
    ],
  },
  {
    title: "Mobalytics Remote Extern",
    company_name: "Extern | Mobalytics",
    icon: mobalytics,
    iconBg: "#161329",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Incorporated myself with the vision, mission, and operations of Mobalytics, resulting in a 100% understanding of company goals.",
      "Researched 4+ gaming genres, identifying key trends and market opportunities, leading to a 15% improvement in strategic recommendations.",
      "Evaluated over 10 different game mechanics, KPIs, revenue models, and player psychology, driving an increase in insights.",
      "Oversaw over 3 specific games to gain firsthand experience, enhancing understanding of player behaviors and genre-specific dynamics."
    ],
  },
  {
    title: "Sales Associate",
    company_name: "Harbor Freight Tools",
    icon: hft,
    iconBg: "#161329",
    date: "Aug 2023 - March 2024",
    points: [
      "Boosted store efficiency and profitability by implementing streamlined processes, resulting in a 15% increase in sales.",
      "Ensured a safe, clean, and organized store environment, enhancing customer satisfaction and retention, resulting in a 10% boost in repeated visits.",
      "Managed inventory and back-end operations, ensuring optimal stock levels and reducing shortages by 20%."
    ],
  },
];

export const projects = [
  {
    name: "Old Website",
    description:
      "Old personal Website, built before this main site. Contains many old projects and a detailed timeline of GDC 2023",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Wix", color: "pink-text-gradient" },
    ],
    image: wix,
    source_code_link: "https://markcgvillanueva.wixsite.com/markcgv",
  },
  {
    name: "Routine Logic",
    description:
      "Routine Logic is an intelligent package dependency report application designed to streamline and enhance software maintenance workflows. Leveraging AI and existing UPS systems, this tool helps developers and system administrators.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Electron", color: "green-text-gradient" },
      { name: ".Net", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Google Vertex AI", color: "green-text-gradient" },
    ],
    image: routinelogic,
    source_code_link: "https://github.com/2025-UPS-Hackathon/Routine-Logic",
  },
  {
    name: "User Management",
    description:
      "Developed and tested features for a user management system, including setting up Docker, Ubuntu, and pgAdmin, fixing QA issues, and implementing new API endpoints. Leveraged GitHub for version control and DockerHub for containerization",
    tags: [
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Ubuntu", color: "green-text-gradient" },
      { name: "pgAdmin", color: "pink-text-gradient" },
    ],
    image: usrmanagement,
    source_code_link: "https://github.com/Blankvgx/user_management",
  },
  {
    name: "Adobe Express Add-on | Moviepunk",
    description:
      "Developed Moviepunk for  HackNJIT 2024, a custom Adobe Express add-on, enabling users to upload, manipulate, and integrate images into digital projects seamlessly.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Adobe Express Add-On SDK", color: "blue-text-gradient" },
    ],
    image: moviepunk,
    source_code_link:
      "https://devpost.com/software/moviepunk",
  },
  {
    name: "Mental Health App | Serenity",
    description:
      "Developed a mood-tracking web application for HackRU 2024, enabling users to reflect on daily emotions through a simple and organized interface. Features include a functional login system, mood tracker, diary tab, and color-coded calendar for visualizing stress and happiness trends.",
    tags: [
      { name: "bubble", color: "blue-text-gradient" },
    ],
    image: serenity,
    source_code_link: "https://devpost.com/software/serenity-xuwtp1",
  },
  {
    name: "Public Health | VitalVoyage",
    description:
      "Developed an online appointment booking platform for HackNJIT 2023 Hackathon, incorporating patient registration, digital/printable medical forms, and an educational game for children to enhance engagement.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "GoDaddy", color: "blue-text-gradient" },
    ],
    image: vitalvoyage,
    source_code_link: "https://devpost.com/software/vital-voyage-qfsup7?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    name: "Education Website | DeepEdu",
    description:
      "Developed an innovative website for HackRU 2023 Hackathon, integrating AI and machine learning to create a student tool, enhancing user engagement and functionality.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "GoDaddy", color: "blue-text-gradient" },
    ],
    image: deepedu,
    source_code_link: "https://deepedu.godaddysites.com/",
  },
  {
    name: "Fitness Website & Store | EnvinoWalk",
    description:
      "Engineered a comprehensive website for HackNJIT 2022 Hackathon, utilizing a built-in database to streamline front-end and back-end operations, improving data management efficiency.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Velo", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Wix", color: "blue-text-gradient" },
      { name: "Google Maps", color: "green-text-gradient" },
    ],
    image: envinowalk,
    source_code_link: "https://devpost.com/software/envinowalk",
  },
];