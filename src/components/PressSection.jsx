"use client";

import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel"; // Import the new carousel component

const PressSection = () => {
  const pressImages = [
    "/press-1.jpeg",
    "/press-2.png",
    "/press-3.png",
    "/press-4.png",
    "/press-5.png",
    "/press-6.png",
  ];

  return (
    <section className="w-full py-24 px-4 md:px-16 bg-cream min-h-screen">
      <motion.h2
        className="text-foreground text-5xl md:text-6xl font-bodoni font-light text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Press / Media
      </motion.h2>

      {/* Integrate the Image Carousel */}
      <ImageCarousel
        images={pressImages}
        title="Featured In"
        description="Our work has been recognized by leading publications and media outlets."
      />
    </section>
  );
};

export default PressSection;
