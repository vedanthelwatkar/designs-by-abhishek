"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "DesignsByAbhishek transformed our wedding into a fairy tale. The attention to detail and creative vision exceeded all our expectations. Every guest was amazed by the stunning floral arrangements and lighting design.",
    name: "Priya & Rajesh Sharma",
    title: "Wedding Couple",
  },
  {
    quote:
      "The 3D visualizations helped us understand exactly how our restaurant would look before construction. The final result was even more beautiful than we imagined. Truly professional work!",
    name: "Vikram Patel",
    title: "Restaurant Owner",
  },
  {
    quote:
      "Our corporate event was a huge success thanks to DesignsByAbhishek. The stage design and lighting created the perfect atmosphere for our product launch. Highly recommended!",
    name: "Anita Gupta",
    title: "Event Manager, Tech Corp",
  },
  {
    quote:
      "The floral decorations for our daughter's engagement were absolutely breathtaking. The team understood our vision perfectly and brought it to life with such elegance and style.",
    name: "Suresh & Meera Agarwal",
    title: "Proud Parents",
  },
  {
    quote:
      "Working with DesignsByAbhishek on our hotel's interior design was a pleasure. Their 3D concepts helped us visualize the space perfectly, and the execution was flawless.",
    name: "Rohit Malhotra",
    title: "Hotel General Manager",
  },
  {
    quote:
      "The sangeet ceremony decorations were beyond our dreams! The combination of traditional elements with modern lighting created such a magical atmosphere. Our families are still talking about it.",
    name: "Kavya & Arjun Reddy",
    title: "Wedding Couple",
  },
  {
    quote:
      "DesignsByAbhishek's expertise in luxury event design is unmatched. They transformed our corporate gala into an unforgettable experience. The attention to detail was extraordinary.",
    name: "Deepika Joshi",
    title: "Marketing Director",
  },
  {
    quote:
      "The outdoor wedding setup was perfect despite the challenging venue. The team's creativity in working with the natural landscape while adding their signature touch was impressive.",
    name: "Amit & Sneha Kapoor",
    title: "Wedding Couple",
  },
  {
    quote:
      "Our restaurant's grand opening was a huge success thanks to the stunning interior design. The 3D visualizations were so accurate, and the final result exceeded our expectations.",
    name: "Chef Ravi Kumar",
    title: "Executive Chef & Owner",
  },
  {
    quote:
      "The birthday party decorations for our son were incredible! DesignsByAbhishek created a magical wonderland that made the day truly special for our little one and all the guests.",
    name: "Neha & Karan Singh",
    title: "Happy Parents",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 md:py-24 bg-light overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-light rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-lightrounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10">
        <SectionHeading
          title="Client Testimonials"
          subtitle="DesignsByAbhishek — What Our Clients Say"
        />

        <div className="mt-12">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="mb-8"
          />
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-background mb-6">
            Ready to create your own unforgettable experience?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
