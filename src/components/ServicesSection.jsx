"use client"

import { useRef } from "react"
import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion"
import { Card, CardContent } from "./ui/card" // Corrected path

const ServicesSection = ({ scrollY }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Tracks when section enters/leaves viewport
  })

  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 })

  // Map velocity to a subtle horizontal shift or scale
  const xTranslate = useTransform(smoothVelocity, [-1000, 0, 1000], [-50, 0, 50]) // Shift left/right based on velocity
  const scaleFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [1.05, 1, 1.05]) // Slight scale up on fast scroll

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 md:px-16 bg-background text-cream min-h-screen flex flex-col lg:flex-row"
    >
      {/* Left Section */}
      <div className="lg:w-1/3 bg-background text-cream p-8 md:p-12 flex flex-col justify-center rounded-lg shadow-lg mb-12 lg:mb-0 lg:mr-12">
        <motion.h2
          className="text-cream text-4xl md:text-5xl font-bodoni font-light mb-8 border-b border-cream pb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          A Part of the Spectrum
        </motion.h2>
        <ul className="space-y-6 text-lg md:text-xl font-cormorant">
          {[
            "WEDDINGS & SOCIAL EVENTS",
            "MUSIC FESTIVALS & IP",
            "FASHION SHOWS & EXHIBITIONS",
            "FILM ART DIRECTION",
          ].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              style={{ x: xTranslate, scale: scaleFactor }} // Apply velocity-based animation
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right Section - Grid of Cards */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "FLORAL ARCHITECTURE",
            description: "Flower designing; Sourcing; Art Installation",
            image: "/floral-architecture.jpeg", // Corrected path
          },
          {
            title: "CREATIVE CONCEPTS & DESIGN",
            description: "3D modelling, CAD Floor Plans; AI Designboards",
            image: "/creative-concepts.jpeg", // Corrected path
          },
          {
            title: "LIGHT DESIGN",
            description: "Thematic Ambience & Special effects",
            image: "/light-design.png", // Corrected path
          },
          {
            title: "PRODUCTION & EXECUTION",
            description: "Space Transformation; Turnkey projects",
            image: "/production-execution.png", // Corrected path
          },
        ].map((card, index) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={card.image || "/placeholder.svg"} alt={card.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-foreground text-xl font-bodoni font-medium mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm font-cormorant">{card.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
