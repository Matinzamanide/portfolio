import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from 'typewriter-effect';
import CustomCursor from "../CustomCursor/CustomCursor";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
const Home: React.FC = () => {
  const [darkMode] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="home" className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-all`}>
      <CustomCursor/>
      <Header />

      <section className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 p-10">
          <motion.h1
            className="text-3xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
      options={{
        strings: ['سلام من متین ام 👋!', 'توسعه دهنده ی وبسایت'],
        autoStart: true,
        loop: true,
        delay: 100, 
        deleteSpeed: 60, 
        
      }}
    />
          </motion.h1>
          <p className="mt-4 text-lg">توسعه‌دهنده فرانت‌اند با عشق به طراحی زیبا و انیمیشن‌های جذاب</p>
        </div>
      </section>

      <Skills />
      <About/>
      <Projects />
      <Contact/>
      {/* Footer */}
     
    </div>
  );
};

export default Home;