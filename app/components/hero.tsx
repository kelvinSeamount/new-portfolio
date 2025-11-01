"use client";
import emeka from "@/public/emeka.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useInViewSection } from "../lib/hooks";
import useActiveContext from "../context/useactive-context";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  const { ref } = useInViewSection("Home", 0.5);
  const { setActive, setTimeClick } = useActiveContext();
  const [showCVModal, setShowCVModal] = useState(false);

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
              src={emeka}
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
        <span className="font-bold">Hi there!</span> I&apos;m Emeka, a
        <span className="font-bold"> Frontend Engineer </span>
        with a growing focus on
        <span className="font-bold"> DevOps engineering. </span>I build modern
        web applications with
        <span className="font-bold">
          {" "}
          JavaScript, TypeScript, and cloud-native technologies.{" "}
        </span>
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

        <button
          className="bg-white py-3 px-7 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10"
          onClick={() => setShowCVModal(true)}
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </button>

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

       {/* CV Selection Modal */}
<AnimatePresence>
  {showCVModal && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowCVModal(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 z-50 w-[90%] max-w-md"
      >
        {/* Close button */}
        <button
          onClick={() => setShowCVModal(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <IoClose className="text-2xl text-gray-600 dark:text-gray-300" />
        </button>

        {/* Modal content */}
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Choose CV Language
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Select your preferred language to download
        </p>

        <div className="flex flex-col gap-3">
          
            <a href="/Emeka%20Devops%20CV.docx.pdf"
            download
            onClick={() => setShowCVModal(false)}
            className="bg-gray-900 hover:bg-gray-950 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-4 rounded-xl flex items-center justify-between transition group"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <span className="font-medium">English CV</span>
            </span>
            <HiDownload className="text-xl group-hover:translate-y-1 transition" />
          </a>

          
           <a href="/Emeka%20Devops%20Deutsch%20CV.docx.pdf"
            download
            onClick={() => setShowCVModal(false)}
            className="bg-gray-900 hover:bg-gray-950 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-4 rounded-xl flex items-center justify-between transition group"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">🇩🇪</span>
              <span className="font-medium">German CV</span>
            </span>
            <HiDownload className="text-xl group-hover:translate-y-1 transition" />
          </a>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </section>
  );
};

export default Hero;
