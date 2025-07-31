"use client"

import { motion } from "framer-motion"

const PressSection = () => {
  const pressImages = [
    "/press-1.jpeg", // Corrected path
    "/press-2.png",
    "/press-3.png",
    "/press-4.png",
    "/press-5.png",
    "/press-6.png",
  ]

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pressImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Press clipping ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          />
        ))}
      </div>
    </section>
  )
}

export default PressSection
