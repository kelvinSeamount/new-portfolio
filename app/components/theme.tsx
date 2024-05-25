"use client";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import UseTheme from "../context/use-theme";

const Theme = () => {
  const { theme, toggle } = UseTheme();
  return (
    <button
      className="fixed bottom-5 right-5 bg-opacity-80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggle}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default Theme;
