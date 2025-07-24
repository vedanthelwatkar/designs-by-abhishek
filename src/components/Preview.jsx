import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <motion.img
        layoutId="hero-image"
        onClick={() => navigate("/")}
        src="/abhishek-w-bg-designsbyabhishek.jpeg"
        className="w-1/2"
      />
    </div>
  );
};

export default Preview;
