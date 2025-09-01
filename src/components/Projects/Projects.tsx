import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Container from "../Container/Container";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaPhp,
  FaGithub,
  FaEye,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

// اطلاعات پروژه‌ها
const projects = [
  {
    title: "فروشگاه پمپ و تجهیزات آبی",
    image: "https://apika.ir/apitak/uploads/apika5678.png",
    description: "یک فروشگاه آنلاین با قابلیت پرداخت و مدیریت سفارش‌ها.",
    technologies: [
      <FaReact />,
      <SiTypescript />,
      <SiTailwindcss />,
      <FaGithub />,
    ],
    link: "https://apika.ir",
  },
  {
    title: "وب‌سایت فروشگاهی",
    image: "https://mobile.sarirniroo.ir/mobile-store.png",
    description: "یک فروشگاه آنلاین با قابلیت پرداخت و مدیریت سفارش‌ها.",
    technologies: [
      <FaReact />,
      <SiTypescript />,
      <SiTailwindcss />,
      <FaGithub />,
    ],
    link: "https://mobile.sarirniroo.ir",
  },
  {
    title: "Soul Shelf",
    image: "https://s6.uupload.ir/files/soul_1_a0c3.jpg",
    description: " یک سایت زیبا و واکنش‌گرا برای کشف کتاب با قابلیت جستجو و دسته‌بندی پیشرفته.",
    technologies: [
      <FaReact />,
      <SiNextdotjs />,
      <SiTypescript />,
      <SiTailwindcss />,
      <FaGithub />,
    ],
    link: "https://soulshelf.netlify.app",
  },
  // {
  //   title: "پرینو",
  //   image: "https://api.sarirniroo.ir/perino.png",
  //   description: "یک وبسایت در حوزه ی سلامت زنان که دارای تقیم قاعدگی است",
  //   technologies: [<FaReact />, <SiTailwindcss />, <FaJs />],
  //   link: "https://coffee.sarirniroo.ir",
  // },
  {
    title: "وب‌سایت شرکتی",
    image: "https://apika.ir/apitak/uploads/sarir.niroodfpng.png",
    description: "یک وب‌سایت مدرن برای معرفی خدمات یک شرکت.",
    technologies: [
      <FaReact />,
      <SiTypescript />,
      <SiTailwindcss />,
      <FaPhp />,
      <FaGit />,
    ],
    link: "https://sarirniroo.ir",
  },
  {
    title: "وبسایت فروش پکیج دوره",
    image: "https://api.sarirniroo.ir/invisible.png",
    description: "یک وب‌سایت مدرن برای معرفی خدمات یک شرکت.",
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    link: "http://matinzamani.freehost.io/",
  },
];

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
    <section
      className={`py-12 px-6 lg:${settings.slidesToShow == 2}`}
      id="projects"
    >
    
      <h2 className="text-3xl font-semibold text-center mb-8">نمونه‌کارها</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a href={project.link}>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition duration-300 group-hover:brightness-50"
                  />

                  <a
                    href={project.link}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="p-3 bg-white/40 text-white rounded transition-all hover:bg-white/60 active:scale-95">
                      <FaEye className="text-xl" />
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-right">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-right">
                    {project.description}
                  </p>
                  <div className="flex gap-3 mt-4 text-2xl">
                    {project.technologies.map((icon, i) => (
                      <span
                        key={i}
                        className="text-blue-500"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </Slider>
    </section>
    </Container>
  );
};

export default Projects;

