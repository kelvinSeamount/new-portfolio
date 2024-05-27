"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInViewSection } from "../lib/hooks";

const About = () => {
  const { ref } = useInViewSection("About");

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 text-center sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a {""}
        <span className="font-bold">
          geologist-turned-frontend developer
        </span>{" "}
        passionate about sustainability and creativity, dedicated to
        <span className="font-bold">building eco-friendly web solutions</span>.
        Outside of coding, I enjoy video games and running .Currently, I'm
        improving my backend skills, focusing on
        <span className="italic font-bold"> Node.js.</span> {""}
        I'm actively seeking a full-time software developer role and would love
        to collaborate and create something great together! 🙌
      </p>
    </motion.section>
  );
};

export default About;
