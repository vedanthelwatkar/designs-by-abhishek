"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full py-24 px-4 md:px-16 bg-cream min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 relative overflow-hidden">
      {/* Subtle Indian decorative elements in background */}
      <motion.img
        src="/images/flower-1-designsbyabhishek.png"
        alt="Decorative Flower"
        className="absolute top-0 right-0 w-32 h-auto object-contain opacity-10 pointer-events-none transform translate-x-1/2 -rotate-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="/images/leaf-3-designsbyabhishek.png"
        alt="Decorative Branch"
        className="absolute bottom-0 left-0 w-32 h-auto object-contain opacity-10 pointer-events-none transform -translate-x-1/2 rotate-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="lg:w-1/2 text-center lg:text-left relative z-10">
        <motion.h2
          className="text-foreground text-5xl md:text-6xl font-bodoni font-light mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          For Appointments
        </motion.h2>
        <div className="grid grid-cols-2 gap-8 mb-12">
          <motion.img
            src="/appointment-1.jpeg"
            alt="Appointment image 1"
            className="w-full h-48 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.img
            src="/appointment-2.png"
            alt="Appointment image 2"
            className="w-full h-48 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src="/appointment-3.png"
            alt="Appointment image 3"
            className="w-full h-48 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.img
            src="/appointment-4.png"
            alt="Appointment image 4"
            className="w-full h-48 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>

        <div className="space-y-4 text-lg font-cormorant">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Instagram className="text-foreground" size={24} />
            <span>@designsbyabhishek</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Globe className="text-foreground" size={24} />
            <span>www.designsbyabhishek.com</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Mail className="text-foreground" size={24} />
            <span>Designsbyabhishek@gmail.com</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Phone className="text-foreground" size={24} />
            <span>+91 935 66666 44 / +91 62 83734262</span>
          </motion.div>
        </div>
      </div>

      <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative z-10">
        <motion.img
          src="/contact-gallery-1.png"
          alt="Contact gallery 1"
          className="w-full h-64 object-cover rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <motion.img
          src="/contact-gallery-2.png"
          alt="Contact gallery 2"
          className="w-full h-64 object-cover rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.img
          src="/contact-gallery-3.png"
          alt="Contact gallery 3"
          className="w-full h-64 object-cover rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.img
          src="/contact-gallery-4.png"
          alt="Contact gallery 4"
          className="w-full h-64 object-cover rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>
    </section>
  );
};

export default ContactSection;
