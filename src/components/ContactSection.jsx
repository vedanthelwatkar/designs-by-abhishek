"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, Globe, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    // Mobile validation (Indian numbers)
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else {
      const mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
      if (!mobileRegex.test(formData.mobile.replace(/[\s\-]/g, ""))) {
        newErrors.mobile = "Please enter a valid Indian mobile number";
      }
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.mobile,
          service: "Designs by Abhishek Website",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setIsSubmitted(true);
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: "", mobile: "", email: "", message: "" });
          setIsSubmitted(false);
        }, 3000);
      } else {
        toast({
          title: "Error",
          description:
            "There was a problem submitting your form. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("EmailJS Error Details:", {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        formData: formData,
      });
      toast({
        title: "Error",
        description:
          "There was a problem connecting to our server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-24 px-4 md:px-16 bg-background min-h-[60vh] flex flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden"
    >
      {/* Decorative motifs */}
      <img
        src="/images/flower-1-designsbyabhishek.png"
        alt="Decorative floral motif — DesignsByAbhishek"
        className="pointer-events-none select-none absolute -left-6 bottom-10 w-20 opacity-10"
      />
      <img
        src="/images/leaf-1-desingsbyabhishek.png"
        alt="Decorative leaf — DesignsByAbhishek"
        className="pointer-events-none select-none absolute -right-6 top-10 w-12 opacity-10"
      />

      {/* Contact Info */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.h3
          className="text-light text-4xl md:text-5xl font-dream font-light mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h3>

        {/* Logo */}
        <motion.div
          className="mb-8 flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/logo-designsbyabhishek.png"
            alt="DesignsByAbhishek Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full shadow-lg bg-light/80 p-2"
          />
        </motion.div>

        <div className="space-y-4 text-lg font-cormorant">
          <motion.div
            className="flex items-center gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Instagram className="text-light" aria-hidden="true" />
            <span aria-label="Instagram handle" className="text-light">
              @designsbyabhishek
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Globe className="text-light" aria-hidden="true" />
            <span className="text-light">www.designsbyabhishek.com</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Mail className="text-light" aria-hidden="true" />
            <span className="text-light">Designsbyabhishek@gmail.com</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Phone className="text-light" aria-hidden="true" />
            <span className="text-light">
              +91 935 66666 44 / +91 62 83734262
            </span>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        className="lg:w-1/2 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-light/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-light/50">
          <h4 className="text-2xl font-dream font-light mb-6 text-center text-background">
            Contact Form
          </h4>

          {isSubmitted ? (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h5 className="text-xl font-semibold text-green-600 mb-2">
                Thank You!
              </h5>
              <p className="text-gray-600">
                Your message has been sent successfully.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-background"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full bg-light border rounded-md text-background placeholder:text-background/50 focus:border-background focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Mobile Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="mobile"
                  className="text-sm font-medium text-background"
                >
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full bg-light border rounded-md text-background placeholder:text-background/50 focus:border-background focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-background"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@gmail.com"
                  className={`w-full bg-light border rounded-md text-background placeholder:text-background/50 focus:border-background focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-background"
                >
                  Message *
                </Label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project, event, or any specific requirements..."
                  rows={4}
                  className={`w-full bg-light border rounded-md text-background placeholder:text-background/50 focus:border-background focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  resize-none px-3 py-2 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="flex justify-between items-center">
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message}</p>
                  )}
                  <p className="text-xs text-background ml-auto">
                    {formData.message.length}/500 characters
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg border border-amber-300 hover:border-background focus:ring-4 focus:ring-amber-200"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-light border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
