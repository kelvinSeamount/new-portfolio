"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInViewSection } from "../lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";

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

      <form
        className="flex flex-col mt-10"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg borderBlack px-4"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 borderBlack p-4"
          placeholder="Your message"
          required
          maxLength={5000}
          name="message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
