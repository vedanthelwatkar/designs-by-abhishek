"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import SpotlightCard from "./ui/spotlight-card";

const graphicDesign3DItems = [
  {
    id: 1,
    src: "/designs/3d-designs-1-designsbyabhishek.jpg",
    title: "Luxury Palace Corridor with Floral Ceiling Installation",
    category: "Interior Design – Luxury Hospitality",
    description:
      "An opulent corridor featuring golden marble walls, intricate geometric floor patterns, and a stunning overhead floral installation. The dramatic star-shaped ceiling element and cascading flower arrangements create a breathtaking entrance that combines classical luxury with contemporary artistic flair.",
  },
  {
    id: 2,
    src: "/designs/3d-designs-2-designsbyabhishek.jpg",
    title: "Artistic Perspective of Hanging Garden Installation",
    category: "Interior Design – Artistic Installations",
    description:
      "A unique upward view showcasing an elaborate hanging garden installation with cascading floral elements suspended from geometric ceiling structures. This artistic perspective highlights the intricate details of the suspended botanical display against golden architectural elements.",
  },
  {
    id: 3,
    src: "/designs/3d-designs-3-designsbyabhishek.jpg",
    title: "Futuristic Lounge with Digital Wall Display",
    category: "Commercial Interior – Modern Entertainment",
    description:
      "A cutting-edge interior space featuring curved golden ceiling elements, a massive blue LED digital wall, and contemporary architectural details. The design seamlessly blends luxury materials with advanced technology, creating an immersive environment perfect for high-end entertainment venues.",
  },
  {
    id: 4,
    src: "/designs/3d-designs-4-designsbyabhishek.jpg",
    title: "Contemporary Luxury Lounge with Geometric Accents",
    category: "Hospitality Design – Modern Luxury",
    description:
      "A sophisticated lounge area featuring pristine white sectional seating with vibrant orange accent pillows, dramatic geometric wall patterns in gold and black, and an open view to adjacent dining spaces. The design balances modern minimalism with bold decorative elements.",
  },
  {
    id: 5,
    src: "/designs/3d-designs-5-designsbyabhishek.jpg",
    title: "High-Tech Hospitality Space with Curved Architecture",
    category: "Commercial Interior – Futuristic Design",
    description:
      "An innovative interior showcasing flowing golden ceiling sculptures, integrated LED technology, and contemporary white furnishings. The space demonstrates how organic architectural forms can be combined with digital displays to create a truly futuristic hospitality environment.",
  },
  {
    id: 6,
    src: "/designs/3d-designs-6-designsbyabhishek.jpg",
    title: "Opulent Restaurant with Ornate Dining Setup",
    category: "Hospitality Design – Fine Dining",
    description:
      "A luxurious restaurant interior featuring rich green structural columns, elaborate golden dining furniture, and decorative ceiling installations with hanging elements. The space combines classical elegance with contemporary luxury, creating an atmosphere of refined sophistication.",
  },
  {
    id: 7,
    src: "/designs/3d-designs-7-designsbyabhishek.jpg",
    title: "Elegant Fine Dining Room with Golden Accents",
    category: "Restaurant Interior – Luxury Dining",
    description:
      "A premium dining space showcasing circular golden tables with upholstered chairs, sophisticated ambient lighting, and ornate ceiling details. The warm color palette and luxurious materials create an intimate yet grand atmosphere perfect for high-end culinary experiences.",
  },
  {
    id: 8,
    src: "/designs/3d-designs-8-designsbyabhishek.jpg",
    title: "Ornate Restaurant Corridor with Decorative Panels",
    category: "Hospitality Design – Luxury Interiors",
    description:
      "A magnificent restaurant corridor featuring intricate golden decorative wall panels, emerald green structural columns, and geometric floor patterns. The design showcases masterful attention to detail with classical motifs reimagined in a contemporary luxury setting.",
  },
];

export default function GraphicDesignSection() {
  // Duplicate items for infinite scroll effect
  const infiniteItems = [...graphicDesign3DItems, ...graphicDesign3DItems];

  return (
    <section
      id="graphic-design"
      className="relative w-full py-20 md:py-24 px-4 md:px-16 bg-background overflow-hidden"
    >
      {/* Decorative motifs - significantly more visible and animated */}
      {/* <motion.img
        src="/images/floral-designsbyabhishek.jpg"
        alt="Decorative floral design — DesignsByAbhishek"
        className="pointer-events-none select-none absolute left-0 top-1/4 w-64 md:w-80 opacity-40 z-0 -rotate-45"
        initial={{ rotate: -45, scale: 1 }}
        animate={{ rotate: -35, scale: 1.05 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      /> */}
      <motion.img
        src="/images/leaf-1-desingsbyabhishek.png"
        alt="Decorative leaf — DesignsByAbhishek"
        className="pointer-events-none select-none absolute right-0 bottom-1/4 w-56 md:w-72 opacity-40 z-0 rotate-45"
        initial={{ rotate: 45, scale: 1 }}
        animate={{ rotate: 55, scale: 1.05 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="relative z-20">
        <SectionHeading
          title="Graphic Design 3D"
          subtitle="DesignsByAbhishek — Concept Visualizations"
          mode="light"
        />

        {/* Mobile: Horizontal Scrolling Carousel */}
        <div className="block md:hidden mt-12">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
              {infiniteItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex-shrink-0 w-72">
                  <SpotlightCard
                    src={item.src}
                    alt={`${item.title} — DesignsByAbhishek`}
                    title={item.title}
                    description={item.description}
                    delay={0}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Scroll indicator for mobile */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>Swipe to explore</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {graphicDesign3DItems.map((item, idx) => (
            <SpotlightCard
              key={item.src}
              src={item.src}
              alt={`${item.title} — DesignsByAbhishek`}
              title={item.title}
              description={item.description}
              delay={idx * 0.04}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
