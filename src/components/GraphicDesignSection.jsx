"use client"

import { motion } from "framer-motion"

const GraphicDesignSection = () => {
  const images = [
    "/graphic-design-1.jpeg", // Corrected path
    "/graphic-design-2.png",
    "/graphic-design-3.png",
    "/graphic-design-4.png",
    "/graphic-design-5.png",
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
        Graphic design 3D
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Graphic design image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
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

export default GraphicDesignSection
