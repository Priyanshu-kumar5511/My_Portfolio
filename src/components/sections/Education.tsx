import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

// 🎓 University logos
import universityIcon1 from "../../assets/certificates/united.png";
import universityIcon2 from "../../assets/certificates/lpu.png";
import Divine1 from "../../assets/certificates/Divine1.jpg";

// 📘 Education details
// 📘 Education details
const educationDetails = [
  {
    title: "Higher Education",
    institution: "Divine Sainik School",
    location: "Varanasi, Uttar Pradesh",
    date: "2020 - 2022",
    cgpa: "6.9 CGPA",
    icon: Divine1,
    iconBg: "#383E56",
    points: [
      "Studied Commerce with focus on Business, Accounting, and Economics.",
      "Learned essential skills in team management, leadership, and discipline.",
      "Participated in inter-school competitions and teamwork-based activities.",
      "Developed strong organizational and time management skills.",
      "Built a foundation in logical reasoning and real-world problem-solving.",
    ],
  },
  {
    title: "Bachelor of Computer Application (BCA)",
    institution: "United University",
    location: "Prayagraj, Uttar Pradesh",
    date: "2022 - 2025",
    cgpa: "8.5 CGPA",
    icon: universityIcon1,
    iconBg: "#383E56",
    points: [
      "Built a strong foundation in programming, data structures, algorithms, and networking.",
      "Learned core languages including C, Java, and Python, along with basics of web development.",
      "Developed problem-solving and analytical thinking through coding challenges and assignments.",
      "Completed multiple MERN stack and data visualization projects.",
      "Actively participated in university-level hackathons and technical events.",
    ],
  },
  {
    title: "Master of Computer Application (MCA)",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "2025 - 2027",
    cgpa: "NA",
    icon: universityIcon2,
    iconBg: "#915EFF",
    points: [
      "Pursuing advanced studies in Full-Stack Development and Cloud Computing.",
      "Learning Advanced Java, Advanced C++, Advanced Networking, DBMS, and Data Structures & Algorithms (DSA).",
      "Focused on AI integration, scalable software architectures, and performance optimization.",
      "Active member of developer communities and university-led tech workshops.",
    ],
  },
];


const EducationCard = (edu: any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={edu.date}
      iconStyle={{ background: edu.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={edu.icon}
            alt={edu.institution}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{edu.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {edu.institution}
        </p>
        <p className="text-[14px] text-gray-400">{edu.location}</p>
        <p className="text-[14px] text-[#915EFF] font-semibold">{edu.cgpa}</p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {edu.points.map((point: string, index: number) => (
          <li
            key={`edu-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      {/* ✅ Same style header as Work Experience */}
      <Header useMotion={true} {...config.sections.education} />

      {/* ✅ Timeline layout (fixed overlap issue) */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationDetails.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
