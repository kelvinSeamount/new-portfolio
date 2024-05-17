"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import useActiveContext from "../context/use.active-context";

const About = () => {
  //improve scroll in view function
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { setActive, timeClick } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - timeClick > 1000) {
      setActive("About");
    }
  }, [inView, setActive, timeClick]);

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
        After graduating with a degree in
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned
        <span className="font-medium">full-stack web development</span>.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
};

export default About;
