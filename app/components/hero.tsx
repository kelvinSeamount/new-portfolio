"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useInViewSection } from "../lib/hooks";
import useActiveContext from "../context/useactive-context";

const Hero = () => {
  const { ref } = useInViewSection("Home", 0.5);
  const { setActive, setTimeClick } = useActiveContext();

  return (
    <section
      className="max-w-[50rem] text-center mb-28 sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ type: "keyframes", duration: 0.5 }}
          >
            <Image
              src={"/Emeka-icon.png"}
              alt="My Potrait"
              width={192}
              height={95}
              priority={true}
              quality="95"
              className="rounded-full w-24 h-24 object-contain border-white shadow-lg border-[0.35rem]"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-[-2] -right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 pt-14 !leading-[1.5] font-medium sm:text-3xl text-2xl text-center"
      >
        <span className="font-bold">Hi there!</span> I am Emeka
        <span className="font-bold"> Frontend engineer </span>
        specializing in building web applications with
        <span className="font-bold"> JavaScript and TypeScript. </span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center gap-8 px-14 sm:flex-row font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 flex items-center gap-2 rounded-full py-3 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
          onClick={() => {
            setActive("Contact");
            setTimeClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white py-3 px-7 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10"
          href="/Emeka Nwachukwu Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center rounded-full gap-2 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10 dark:text-white/60  dark:bg-white/10"
          href="https://www.linkedin.com/in/emeka-nwachukwu-he-him-882b9b10a/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 gap-2 rounded-full flex items-center outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition group cursor-pointer border border-black/10  dark:text-white/60  dark:bg-white/10"
          href="https://github.com/kelvinSeamount"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
