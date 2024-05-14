"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ type: "keyframes", duration: 0.5 }}
          >
            <Image
              src={"/Emeka-icon.jpg"}
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
    </section>
  );
};

export default Hero;
