"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectData } from "../lib/data";
import MyProjects from "./myprojects";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  //improve scroll in view function
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
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
