"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { useInViewSection } from "../lib/hooks";
import { motion } from "framer-motion";

const fadeAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05 * id,
    },
  }),
};

const Skills = () => {
  const { ref } = useInViewSection("Skills");
  return (
    <section
      className="mb-28 scroll-mt-28 max-w-[53rem] text-center sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>My Tech Stacks</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, id) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-2xl px-5 py-2"
            key={id}
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={id}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
