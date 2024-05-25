import React, { useContext } from "react";
import { ActiveContext } from "./activecontext-provider";

const useActiveContext = () => {
  const context = useContext(ActiveContext);
  if (context === null) {
    throw new Error(
      "useActiveContext must be used within an ActiveContextProvider"
    );
  }
  return context;
};

export default useActiveContext;
