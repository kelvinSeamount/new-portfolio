import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h1 className="text-3xl capitalize mb-8 text-center">{children}</h1>;
};

export default SectionHeading;
