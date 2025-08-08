"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen px-4 md:px-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 bg-cream overflow-hidden"
      aria-label="DesignsByAbhishek — Luxury Wedding Designer Hero Section"
    >
      {/* Decorative motifs (only the 4 approved images) */}
      <motion.img
        src="/images/flower-1-designsbyabhishek.png"
        alt="Decorative Indian floral motif — DesignsByAbhishek"
        className="pointer-events-none select-none absolute -left-10 -top-10 w-28 md:w-40 opacity-15"
        initial={prefersReduced ? false : { opacity: 0, x: -20, y: -20 }}
        animate={prefersReduced ? {} : { opacity: 0.15, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.img
        src="/images/leaf-3-designsbyabhishek.png"
        alt="Decorative Indian leaf branch motif — DesignsByAbhishek"
        className="pointer-events-none select-none absolute -right-8 bottom-8 w-24 md:w-36 opacity-15"
        initial={prefersReduced ? false : { opacity: 0, x: 20, y: 20 }}
        animate={prefersReduced ? {} : { opacity: 0.15, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* Text block */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.h1
          className="text-foreground text-5xl md:text-6xl font-italianno font-medium mb-3 leading-tight"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Abhishek Kaushik
        </motion.h1>

        <motion.h2
          className="text-foreground/90 text-xl md:text-2xl font-cormorant tracking-wide"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Luxury Wedding Designer — DesignsByAbhishek
        </motion.h2>
        <motion.p
          className="text-foreground text-base md:text-lg font-cormorant leading-relaxed max-w-2xl mx-auto lg:mx-0"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          For over 18 years, we've been the storytellers behind India's most
          unforgettable celebrations—where design meets emotion and every detail
          whispers luxury. From the iconic unions of Yuvraj Singh &amp; Hazel
          Keech and Bhuvneshwar Kumar &amp; Nupur Nagar to collaborations with
          Tony Robbins, Arjun Rampal, Anju Modi, Rohit Bal, and Sabyasachi, our
          journey is adorned with illustrious partnerships. We've also crafted
          experiences for DY Patil, Sanjay Ghodawat Group, Dollar Club, Muthoot
          Group, Being Human, Somany Tiles, and the Karmani Family. Each event
          is a canvas—painting opulence, elegance, and bespoke artistry.
        </motion.p>
      </div>
      <img
        src="/abhishek-kaushik-achievements-designsbyabhishek.jpg"
        className="w-40 h-40 mix-blend-multiply"
      />

      {/* Portrait (from your public folder path) */}
      <motion.figure
        className="lg:w-1/2 flex justify-center lg:justify-end"
        initial={prefersReduced ? false : { opacity: 0, scale: 0.92 }}
        whileInView={prefersReduced ? {} : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img
          src="/profile-images/abhishek-kaushik-image-4-designsbyabhishek.jpeg"
          alt="Abhishek Kaushik — DesignsByAbhishek Luxury Wedding Designer portrait"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg mb-10"
          loading="eager"
          decoding="async"
        />
        <figcaption className="sr-only">
          Portrait of Abhishek Kaushik, Luxury Wedding Designer.
        </figcaption>
      </motion.figure>

      {/* Extra subtle leaves for depth */}
      <img
        src="/images/leaf-2-designsbyabhishek.png"
        alt="Decorative leaf — DesignsByAbhishek"
        className="pointer-events-none select-none absolute left-6 bottom-12 w-12 opacity-10 hidden md:block"
      />
      <img
        src="/images/leaf-1-desingsbyabhishek.png"
        alt="Decorative single leaf — DesignsByAbhishek"
        className="pointer-events-none select-none absolute right-10 top-1/3 w-8 opacity-10 hidden md:block"
      />
    </section>
  );
}
