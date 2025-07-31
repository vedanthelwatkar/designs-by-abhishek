"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full py-24 px-4 md:px-16 bg-cream flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-screen">
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.h1
          className="text-foreground text-5xl md:text-6xl font-italianno font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Abhishek Kaushik
        </motion.h1>
        <motion.h2
          className="text-foreground text-xl md:text-2xl font-cormorant font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          WEDDING DESIGNER
        </motion.h2>
        <motion.p
          className="text-foreground text-base md:text-lg font-cormorant leading-relaxed max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          For over 18 years, we've been the storytellers behind India's most
          unforgettable celebrations—where design meets emotion, and every
          detail whispers luxury. From the star-studded unions of Yuvraj Singh &
          Hazel Keech; Bhuvneshwar Kumar & Nupur Nagar to collaborations with
          icons like Tony Robbins, Arjun Rampal, Anju Modi, Rohit Bal, and
          Sabyasachi, our journey has been adorned with illustrious
          partnerships. We've also had the privilege of crafting experiences for
          esteemed organizations such as DY Patil, Sanjay Gho dawat Group,
          Dollar Club, Muthoot Group, Being Human, Somany Tiles & Karmani
          Family.
          <br />
          <br />
          Each event has been a canvas, allowing us to paint the essence of
          opulence, elegance, and bespoke artistry. Through these experiences,
          we've not only celebrated love and milestones but have also come to
          embody the very definition of luxury.
        </motion.p>
      </div>
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img
          src="/hero-designsbyabhishek.jpeg" // Corrected path
          alt="Abhishek Kaushik"
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
