"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectData } from "../lib/data";
import MyProjects from "./myprojects";
import { useInView } from "react-intersection-observer";
import useActiveContext from "../context/use.active-context";

const Projects = () => {
  //improve scroll in view function
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActive, timeClick } = useActiveContext();

  useEffect(() => {
    if (inView && Date.now() - timeClick > 1000) {
      setActive("Projects");
    }
  }, [inView, setActive, timeClick]);

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
