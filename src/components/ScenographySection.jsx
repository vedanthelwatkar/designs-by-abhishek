"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import Carousel from "@/components/ui/carousel"; // Corrected import

const scenographyItems = [
  {
    src: "/scenography/grand-sangeet-decoration-designsbyabhishek.jpg",
    title: "Grand Sangeet Decoration",
  },
  {
    src: "/scenography/haldi-decoration-designsbyabhishek.jpg",
    title: "Haldi Decoration",
  },
  {
    src: "/scenography/musical-setup-designsbyabhishek.jpg",
    title: "Musical Setup",
  },
  {
    src: "/scenography/haldi-event-designsbyabhishek.jpg",
    title: "Haldi Event",
  },
  {
    src: "/scenography/sangeet-setup-designsbyabhishek.jpg",
    title: "Sangeet Setup",
  },
  {
    src: "/scenography/haldi-floral-decoration-designsbyabhishek.jpg",
    title: "Haldi Floral Decoration",
  },
  {
    src: "/scenography/wedding-hall-decoration-designsbyabhishek.jpg",
    title: "Wedding Hall Decoration",
  },
  {
    src: "/scenography/wedding-mandap-decoration-designsbyabhishek.jpg",
    title: "Wedding Mandap Decoration",
  },
];

export default function ScenographySection() {
  return (
    <section
      id="scenography"
      className="relative w-full py-20 md:py-24 bg-cream overflow-hidden"
    >
      {/* Decorative motifs - more visible and animated */}
      <motion.img
        src="/images/flower-1-designsbyabhishek.png"
        alt="Decorative flower — DesignsByAbhishek"
        className="pointer-events-none select-none absolute left-0 md:left-8 top-10 w-36 md:w-48 opacity-20 z-10 rotate-12"
        initial={{ rotate: 12, y: 0, scaleX: 1 }}
        animate={{ rotate: 22, y: -15, scaleX: 1 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="/images/flower-1-designsbyabhishek.png"
        alt="Decorative flower — DesignsByAbhishek"
        className="pointer-events-none select-none absolute right-0 md:right-8 top-10 w-36 md:w-48 opacity-20 z-10 -rotate-12"
        initial={{ rotate: -12, y: 0, scaleX: -1 }}
        animate={{ rotate: -22, y: -15, scaleX: -1 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="/images/floral-designsbyabhishek.jpg"
        alt="Decorative floral design — DesignsByAbhishek"
        className="pointer-events-none select-none absolute left-0 top-1/2 w-48 opacity-20 z-0 -rotate-45"
        initial={{ rotate: -45, scale: 1 }}
        animate={{ rotate: -35, scale: 1.05 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="/images/leaf-3-designsbyabhishek.png"
        alt="Decorative leaf — DesignsByAbhishek"
        className="pointer-events-none select-none absolute right-0 bottom-0 w-28 opacity-30 z-0 -rotate-12"
        initial={{ rotate: -12, y: 0 }}
        animate={{ rotate: -2, y: 10 }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Animated Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          title="Scenography / Art Installation"
          subtitle="DesignsByAbhishek — Immersive Spaces"
        />
      </motion.div>

      {/* Animated Carousel Container */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Carousel slides={scenographyItems} />
      </motion.div>
    </section>
  );
}
