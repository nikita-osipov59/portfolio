import React from "react";

import SkillsStyle from "./Skills.module.scss";
import { Table } from "@/components/ui/Table";
import { Title } from "@/components/ui/Title";
import Fragments from "@/components/ui/Fragments";

const Skills = () => {
  return (
    <section id="skills" className={SkillsStyle.skills}>
      <Title prefix="#" title="Навыки" />
      <div className={SkillsStyle.wrapper}>
        <Fragments />
        <div className={SkillsStyle.table}>
          <Table
            title="Технологии"
            description="JavaScript TypeScript HTML5 CSS3(SCSS) "
          />
          <Table
            title="Инструменты"
            description="VSCode Figma Git Vite Postman Npm"
          />
          <Table title="Фреймворки & Библиотеки" description="React Next" />
          <Table
            title="Эко-система"
            description="
          Redux-Toolkit React-Router-Dom React-Hook-Form React Query
          "
          />
          <Table
            title="Работа с серверами"
            description="
          Axios fetch
          "
          />
          <Table title="База данных" description="Firebase" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
