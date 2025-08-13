"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const portfolioItems = [
  {
    id: 1,
    src: "/portfolio/wedding-setup-designsbyabhishek.jpg",
    title: "Wedding Setup",
    category: "Wedding Design – Ceremony",
    content:
      "An elegant wedding setup featuring intricate floral designs and ambient lighting.",
  },
  {
    id: 2,
    src: "/portfolio/night-decor-designsbyabhishek.jpg",
    title: "Night Decor",
    category: "Event Design – Evening",
    content:
      "Transforming spaces with enchanting night decorations and captivating light installations.",
  },
  {
    id: 3,
    src: "/portfolio/sangeet-stage-light-designsbyabhishek.jpg",
    title: "Sangeet Stage Lighting",
    category: "Event Design – Stage Lighting",
    content:
      "Dynamic stage lighting for Sangeet ceremonies, creating a vibrant and festive atmosphere.",
  },
  {
    id: 4,
    src: "/portfolio/reception-floral-tunnel-designsbyabhishek.jpg",
    title: "Reception Floral",
    category: "Wedding Design – Reception",
    content:
      "A breathtaking floral tunnel entrance designed for grand wedding receptions.",
  },
  {
    id: 5,
    src: "/portfolio/floral-decoration-designsbyabhishek.jpg",
    title: "Floral Decoration",
    category: "Event Design – Floral",
    content:
      "Exquisite floral arrangements adding beauty and elegance to any event.",
  },
  {
    id: 6,
    src: "/portfolio/bride-entry-setup-designsbyabhishek.jpg",
    title: "Bride Entry Setup",
    category: "Wedding Design – Bridal",
    content:
      "A majestic and personalized setup for the bride's grand entrance.",
  },
  {
    id: 7,
    src: "/portfolio/indoor-decoration-designsbyabhishek.jpg",
    title: "Indoor Decoration",
    category: "Event Design – Indoor",
    content:
      "Sophisticated indoor decor solutions for various events and celebrations.",
  },
  {
    id: 8,
    src: "/portfolio/outside-wedding-setup-designsbyabhishek.jpg",
    title: "Outdoor Wedding Setup",
    category: "Wedding Design – Outdoor",
    content:
      "Charming outdoor wedding setups designed to blend with natural surroundings.",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full py-20 md:py-24 bg-background overflow-hidden"
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
        src="/images/leaf-3-designsbyabhishek.png"
        alt="Decorative leaf — DesignsByAbhishek"
        className="pointer-events-none select-none absolute left-1/2 md:left-1/2 bottom-0 w-32 md:w-40 opacity-40 z-10 -rotate-12"
        initial={{ rotate: -12, y: 0 }}
        animate={{ rotate: -2, y: 15 }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <SectionHeading
        title="Portfolio"
        subtitle="DesignsByAbhishek — Selected Works"
        mode="light"
      />

      <div className="flex justify-center w-full">
        <Carousel
          items={portfolioItems.map((item, index) => (
            <Card key={index} card={item} index={index} layout={true} />
          ))}
        />
      </div>
    </section>
  );
}
