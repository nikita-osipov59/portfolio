import React from "react";

import ProjectsStyle from "./Projects.module.scss";
import { Card } from "../ui/Card";

const Projects = () => {
  return (
    <section className={ProjectsStyle.projects}>
      <div className={ProjectsStyle.title}>
        <span className="pink">#</span>
        Проекты
      </div>
      <div className={ProjectsStyle.box}>
        <Card />
      </div>
    </section>
  );
};

export default Projects;
