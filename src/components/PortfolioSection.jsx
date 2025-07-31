"use client"

import { motion } from "framer-motion"

const PortfolioSection = () => {
  const images = [
    "/portfolio-1.png", // Corrected path
    "/portfolio-2.png", // Assuming you have these in public/
    "/portfolio-3.png",
    "/portfolio-4.png",
    "/portfolio-5.png",
    "/portfolio-6.png",
    "/portfolio-7.png",
    "/portfolio-8.png",
  ]

  return (
    <section className="w-full py-24 px-4 md:px-16 bg-cream min-h-screen">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-foreground text-5xl md:text-6xl font-bodoni font-light">Portfolio</h2>
        <p className="text-muted-foreground text-lg md:text-xl font-cormorant">Designs By Abhishek</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Portfolio image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          />
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
