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
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/MarkVillanueva/MarkVillanueva.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/MarkVillanueva/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/MarkVillanueva/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/MarkVillanueva/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/MarkVillanueva/Image_to_Pencil_Sketch_App",
  },
];
