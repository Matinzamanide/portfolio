import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container/Container";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight / 1.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
    <section id="about" className="w-full py-20 bg-gray-900">
      <div className="flex flex-col lg:flex-row items-center justify-between px-8  lg:px-16">
        
        <motion.div
          className="w-full lg:w-1/2 h-[350px] lg:h-[450px] bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: "url('https://clicklovegrow.com/wp-content/uploads/2021/03/img-3445-edit.jpg')",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div
          className="w-full lg:w-1/2 mt-10 lg:pr-10  lg:mt-0 text-gray-200"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600 ">درباره من</h2>
          <p className="text-lg leading-relaxed">
            من یک توسعه‌دهنده فرانت‌اند هستم که عاشق ساختن رابط‌های کاربری جذاب و حرفه‌ای‌ام.
            همیشه به دنبال یادگیری تکنولوژی‌های جدید و ایجاد تجربه‌های کاربری بی‌نقص هستم.
          </p>
          <p className="mt-4 text-lg">
            مهارت‌های من شامل React، TypeScript، Tailwind، Next.js و Git است.
          </p>
        </motion.div>
      </div>
    </section>
    </Container>
  );
};

export default About;