import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      {/* ✅ Services Section */}
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* ✅ Social Media Section */}
      <div className="mt-16 flex justify-center gap-8">
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
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
