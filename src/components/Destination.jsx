import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import ScrollingCities from "./ScrollingCities";

const Destination = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-16 py-8">
      {/* Text Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-foreground text-6xl font-italianno font-medium"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          designs by
        </motion.div>
        <motion.div
          className="text-foreground text-9xl font-bodoni font-light"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ABHISHEK
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.img
        layoutId="hero-image"
        initial={{ width: "50%", height: "auto" }}
        animate={{ width: "100%", height: "40vh" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.25,
          animation: "easeOut",
        }}
        src="/abhishek-w-bg-designsbyabhishek.jpeg"
        className="object-cover cursor-pointer"
        style={{ objectPosition: "center 20%" }}
      />
    </div>
  );
};

export default Destination;
