import React from "react";
import SectionHeading from "./section-heading";
import { projectData } from "../lib/data";
import MyProjects from "./myprojects";

const Projects = () => {
  return (
    <section id="projects">
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
