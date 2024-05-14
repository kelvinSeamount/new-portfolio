"use client";
import React from "react";
import { links } from "../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-opacity-40 border-white bg-white bg-opacity-80 sm:top-6 sm:h-[52px] sm:w-[576px] sm:rounded-full shadow-lg shadow-black/[0.03] backdrop-blur-[8px]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:gap-5 sm:flex-nowrap sm:w-[initial]">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center px-3 py-3 hover:text-slate-950 transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
