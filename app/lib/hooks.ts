import { SectionNameProps } from "./types";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useActiveContext from "../context/useactive-context";

export function useInViewSection(
  SectionNameProps: SectionNameProps,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActive, timeClick } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - timeClick > 1000) {
      setActive(SectionNameProps);
    }
  }, [inView, setActive, timeClick, SectionNameProps]);

  return {
    ref,
  };
}
