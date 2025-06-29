import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGit, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql,SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
    { icon: <FaHtml5 className="text-5xl text-orange-500 mx-auto" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-5xl text-blue-400 mx-auto" />, name: "CSS3" },
    { icon: <FaJs className="text-5xl text-yellow-500 mx-auto" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-5xl text-teal-400 mx-auto" />, name: "Tailwind" },
  { icon: <FaReact className="text-5xl text-blue-500 mx-auto" />, name: "React" },
  { icon: <SiNextdotjs className="text-5xl mx-auto text-white" />, name: "Next.js" },
  { icon: <SiTypescript className="text-5xl text-blue-600 mx-auto" />, name: "TypeScript" },
  { icon: <FaGit className="text-5xl text-red-500 mx-auto" />, name: "Git" },
  { icon: <FaPhp className="text-5xl text-blue-600 mx-auto" />, name: "PHP" },
  { icon: <SiMysql className="text-5xl text-blue-700 mx-auto" />, name: "SQL" },
];

const Skills: React.FC = () => {
  return (
    <section className="py-12 px-6" id="skills">
      <h2 className="text-3xl font-semibold text-center mb-8">مهارت‌ها</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-all"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;