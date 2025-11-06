import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

import makeCert from "../../assets/certificates/make.jpg";
import techCert from "../../assets/certificates/tech.png";
import internCert from "../../assets/certificates/intern.png";
import unstop from "../../assets/certificates/unstop.png";

import eventeye_0 from "../../assets/certificates/eventeye_0.jpg";
import eventeye_1 from "../../assets/certificates/eventeye_1.png";
import eventeye_2 from "../../assets/certificates/eventeye_2.png";
import eventeye_3 from "../../assets/certificates/enenteye_3.png";

import eventview from "../../assets/certificates/eventview.png";
import intern_2 from "../../assets/certificates/intern_2.png";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// Example Achievements (Replace with real data)
const achievements = [
  {
    title: "Web Development Certificate",
    organization: "MakeIndias",
    image: makeCert,
  },
  {
    title: "Full Stack Developer Internship",
    organization: "Internshala",
    image: internCert,
  },
  {
    title: "Hackathon",
    organization: "Lovely Professional University",
    image: techCert,
  },
  {
    title: "Hackathon",
    organization: "UNstop",
    image: unstop,
  },
  {
    title: "Frontend Developer Training",
    organization: "EventEye",
    image: eventeye_0,
  },
  {
    title: "24-Hour Hackathon",
    organization: "EventEye",
    image: eventeye_1,
  },
  {
    title: "24-Hour Hackathon",
    organization: "EventEye",
    image: eventeye_2,
  },
  {
    title: "24-Hour Hackathon",
    organization: "EventEye",
    image: eventeye_3,
  },
  {
    title: "Hackathon",
    organization: "EventView",
    image: eventview,
  },
  {
    title: "Full Stack Developer Internship",
    organization: "Internshala",
    image: intern_2,
  },
];


interface IAchievementCard {
  index: number;
  title: string;
  organization: string;
  image: string;
}

const AchievementCard: React.FC<IAchievementCard> = ({
  title,
  organization,
  image,
}) => (
  <div className="bg-black-200 xs:w-[300px] w-full rounded-3xl p-5 flex-shrink-0 shadow-lg mx-3">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-2xl"
    />
    <div className="mt-4 text-center">
      <h3 className="text-[18px] font-bold text-white">{title}</h3>
      <p className="text-secondary text-[14px] mt-1">{organization}</p>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px] overflow-hidden">
      {/* Header Section */}
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>

      {/* Auto-Scroll Achievements Section */}
      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <motion.div
          className="flex w-max gap-6"
          animate={{
            x: ["0%", "-50%"], // move left
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 90, // speed of scroll (lower = faster)
          }}
        >
          {/* Duplicate achievements to create seamless loop */}
          {[...achievements, ...achievements].map((item, index) => (
            <AchievementCard key={index} index={index} {...item} />
          ))}
        </motion.div>
      </div>

      {/* Social Media Section */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="flex justify-center gap-8 pb-10"
      >
        <a
          href="https://github.com/Priyanshu-kumar5511"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-[#915EFF] transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/priyanshu-kumar-maurya-31174828a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-[#0077b5] transition-colors"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/8081553667"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-[#25D366] transition-colors"
        >
          <FaWhatsapp />
        </a>
      </motion.div>
    </div>
  );
};

export default Feedbacks;
