import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 hidden lg:block rounded-full bg-blue-500 opacity-80 pointer-events-none z-50"
      style={{
        boxShadow: "0 0 15px rgba(0, 153, 255, 0.6)", 
      }}
      animate={{
        x: position.x - 12, 
        y: position.y - 12,
      }}
      transition={{ duration: 0, ease: "linear" }} 
    />
  );
};

export default CustomCursor;