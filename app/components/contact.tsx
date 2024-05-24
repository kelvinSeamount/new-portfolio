"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInViewSection } from "../lib/hooks";

const Contact = () => {
  const { ref } = useInViewSection("Contact");

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6">
        Get in touch with me directly @{" "}
        <a href="mailto:kelvinnwachukwu89@gmail.com" className="underline">
          kelvinnwachukwu89@gmail.com
        </a>{" "}
        or use this form
      </p>

      <form className="flex flex-col mt-10">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg borderBlack px-4"
        />
        <textarea
          className="h-52 my-3 borderBlack p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 h-[3rem] rounded-full text-white transition-all outline-none bg-gray-900 w-[7rem] group"
        >
          Sumbit{" "}
          <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
