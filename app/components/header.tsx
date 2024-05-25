"use client";
import React from "react";
import { links } from "../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import useActiveContext from "../context/useactive-context";

const Header = () => {
  //SET ACTIVE LINKS
  const { active, setActive, setTimeClick } = useActiveContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-opacity-40 border-white bg-white bg-opacity-80 sm:top-6 sm:h-[52px] sm:w-[576px] sm:rounded-full shadow-lg shadow-black/[0.03] backdrop-blur-[8px] dark:bg-gray-950 dark:border-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:gap-5 sm:flex-nowrap sm:w-[initial]">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center px-3 py-3 hover:text-slate-950 transition  dark:text-gray-500 dark:hover:text-slate-300",
                  {
                    "text-slate-950 dark:text-slate-200": active === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === active ? (
                  <motion.span
                    layoutId="active"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 70,
                    }}
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  ></motion.span>
                ) : null}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
