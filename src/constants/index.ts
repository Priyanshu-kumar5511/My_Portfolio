import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  meta,
  cplus,

  logotechoriginator,
  makeIndas,
  internshala,

  

  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: " Problem Solver",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
   name: "C++", icon: cplus,
  },
];

const experiences: TExperience[] = [
  {
    title: "Junior Php Developer",
    companyName: "Techoriginator",
    icon: logotechoriginator,
    iconBg: "#383E56",
    date: "January 2025 - June 2025",
    points: [
      "Gained hands-on experience in full-stack web development over 6 months, focusing on both front-end and back-end technologies.",
      "Developed and maintained web applications using PHP, integrating with MySQL databases.",
      "Improved UI/UX using HTML, CSS, JavaScript, and Bootstrap to ensure responsive design across all devices.",
      "Worked on SEO optimization techniques to enhance website visibility and performance.",
      "Collaborated with the team to understand project requirements and deliver clean, efficient code.",
    ],
  },
  {
    title: "Frontend Web Developer  ",
    companyName: "MAKEINDAS",
    icon: makeIndas,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2022",
    points: [
      "During my two-month internship at MAKEINDAS, located within the Banaras Hindu University (BHU) campus, I had the unique opportunity to delve deep into the world of web development.",
      "This offline internship provided a hands-on experience that allowed me to apply my theoretical knowledge in real-world projects, while also expanding my skill set in a dynamic and collaborative environment.",
      "Developed high-performance, responsive web applications, resulting in an 80% improvement in page load times and a 50% increase in site speed scores.",
      "Implemented smooth animations and responsive designs, enhancing user engagement and reducing bounce rates by 30%.",
    ],
  },
  {
  title: "Web Development Intern",
  companyName: "Internshala",
  icon: internshala, // replace with your actual icon import or path
  iconBg: "#2C3E50",
  date: "August 2023 - October 2023",
  points: [
    "Seeking an 8-week internship to gain hands-on experience in full-stack web development.",
    "Working on both frontend and backend projects using technologies like React.js, Node.js, and Express.js.",
    "Building responsive and user-friendly interfaces with modern frameworks and libraries.",
    "Collaborating with mentors and peers to enhance coding skills and project efficiency.",
    "Applying best practices in web development to deliver optimized and scalable solutions."
  ],
},
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
