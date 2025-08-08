"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button"; // Assuming shadcn button

const ImageCarousel = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200">
      <div className="p-6 text-center">
        <h3 className="text-foreground text-3xl font-bodoni font-light mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg font-cormorant">
          {description}
        </p>
      </div>
      <div className="relative h-80 md:h-96 flex items-center justify-center">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Carousel image ${currentIndex + 1}`}
            className="absolute w-full h-full object-cover rounded-lg"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            custom={currentIndex} // Pass current index as custom prop for direction
          />
        </AnimatePresence>

        <Button
          className="absolute left-4 bg-white/70 hover:bg-white/90 text-foreground rounded-full p-2 shadow-md z-10"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          className="absolute right-4 bg-white/70 hover:bg-white/90 text-foreground rounded-full p-2 shadow-md z-10"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
      <div className="flex justify-center py-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-primary" : "bg-muted-foreground/50"
            } transition-colors duration-200`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
