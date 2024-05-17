"use client";
import SectionHeading from "./section-heading";
import { projectData } from "../lib/data";
import MyProjects from "./myprojects";
import { useInViewSection } from "../lib/hooks";
import React from "react";

const Projects = () => {
  const { ref } = useInViewSection("Projects");

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      {projectData.map((project, id) => (
        <React.Fragment key={id}>
          <MyProjects {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
