import ProjectsStyle from "./Projects.module.scss";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";

const Projects = () => {
  return (
    <section id="projects" className={ProjectsStyle.projects}>
      <Title prefix="#" title="Проекты" />
      <div className={ProjectsStyle.box}>
        <Card />
      </div>
    </section>
  );
};

export default Projects;
