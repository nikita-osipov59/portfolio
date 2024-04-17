import React from "react";

import ProjectsStyle from "./Projects.module.scss";
import { Card } from "../ui/Card";

const Projects = () => {
  return (
    <section id="projects" className={ProjectsStyle.projects}>
      <p className={ProjectsStyle.title}>
        <span className="pink">#</span>
        Проекты
      </p>
      <div className={ProjectsStyle.box}>
        <Card />
      </div>
    </section>
  );
};

export default Projects;
