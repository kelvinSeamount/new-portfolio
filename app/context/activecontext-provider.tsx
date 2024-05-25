"use client";
import React, { useState } from "react";
import type { SectionNameProps } from "../lib/types";

type ActiveContextProviderProps = {
  children: React.ReactNode;
};

//Create active contextapi & types
type ActiveContextProps = {
  active: SectionNameProps;
  setActive: React.Dispatch<React.SetStateAction<SectionNameProps>>;
  timeClick: number;
  setTimeClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveContext = React.createContext<ActiveContextProps | null>(
  null
);

const ActiveContextProvider = ({ children }: ActiveContextProviderProps) => {
  const [active, setActive] = useState<SectionNameProps>("Home");

  //state for time of click
  const [timeClick, setTimeClick] = useState<number>(0);

  return (
    <ActiveContext.Provider
      value={{
        active,
        setActive,
        timeClick,
        setTimeClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContextProvider;
