/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubscribe = async ({ email }) => {
    // This is a front-end demo: no backend/email service is connected.
    // We validate the input and confirm locally without claiming delivery.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset({ email: "" });
    return email;
  };

  const footerLinks = {
    Company: [
      { label: "About", href: "#about" },
      { label: "Technology", href: "#technology" },
      { label: "Contact", href: "#contact" },
    ],
    Product: [
      { label: "Solar", href: "#home" },
      { label: "System Specs", href: "#specs" },
      { label: "Reviews", href: "#reviews" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={14} /> },
    { name: "Facebook", icon: <Facebook size={14} /> },
    { name: "Twitter", icon: <Twitter size={14} /> },
    { name: "Youtube", icon: <Youtube size={14} /> },
  ];

  return (
    <footer id="contact" className="bg-zinc-950 text-white pt-24 pb-12 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: CTA & Socials */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-light leading-tighter tracking-tight mb-10"
            >
              Design your solar system or schedule a virtual consultation with a{" "}
              <span className="text-zinc-500 italic">Dayvolta Advisor</span> to
              learn more.
            </motion.h2>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@dayvolta.com"
              className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-xs cursor-pointer uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black"
            >
              Order now <ArrowRight size={16} />
            </motion.a>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              Follow us
            </span>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className="flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-5 py-2.5 text-[10px] uppercase tracking-widest"
                >
                  {social.icon} {social.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/10 mb-20" />

        {/* Bottom Section: Links & Newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                {category}
              </span>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              Newsletter
            </span>
            <form onSubmit={handleSubmit(onSubscribe)} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="relative flex items-center max-w-sm">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email address"
                  aria-invalid={!!errors.email}
                  className="w-full bg-transparent border border-zinc-800 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-zinc-500 transition-colors"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending\u2026" : "Submit"}
                </button>
              </div>
              {errors.email && (
                <p role="alert" className="mt-2 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
              {submitted && (
                <p role="status" className="mt-2 text-xs text-lime-400">
                  Thanks! You are on the list for demo updates.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          <Logo sup={false} />
          <p className="text-center md:text-right">
            © {currentYear} Dayvolta - concept portfolio project. Product
            metrics, reviews and availability shown are illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
