import ProjectsStyle from "./Projects.module.scss";
import { Card } from "@/components/ui/Card";
import { Title } from "@/components/ui/Title";

const Projects = () => {
  return (
    <section id="projects" className={ProjectsStyle.projects}>
      <Title prefix="#" title="Проекты" />
      <div className={ProjectsStyle.wrapper}>
        <Card />
      </div>
    </section>
  );
};

export default Projects;
