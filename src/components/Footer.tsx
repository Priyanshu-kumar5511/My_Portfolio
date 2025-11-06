import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d0d0d] to-black text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* 🧑‍💻 Left: Name and Title */}
        <div>
          <h2 className="text-2xl font-bold text-white">Priyanshu Kumar</h2>
          <p className="mt-2 text-gray-400">
            Full Stack Developer & Designer
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-[#915EFF] transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-[#915EFF] transition-colors duration-200">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#915EFF] transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#915EFF] transition-colors duration-200">
                Skills
              </a>
            </li>
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">Email: <span className="text-[#915EFF]">princepriyanshu5511@mail.com</span></p>
          <p className="text-gray-400">Phone: +91 8081553667</p>
        </div>

        {/* 🌐 Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-6 mt-2 text-2xl">
            <a
              href="https://github.com/Priyanshu-kumar5511"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#915EFF] hover:scale-110 transition-transform duration-200"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-kumar-maurya-31174828a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] hover:scale-110 transition-transform duration-200"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* ⚡ Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Priyanshu Kumar</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
