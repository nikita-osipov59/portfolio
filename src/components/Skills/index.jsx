import React from "react";

import SkillsStyle from "./Skills.module.scss";
import { Table } from "../ui/Table";

const Skills = () => {
  return (
    <section className={SkillsStyle.skills}>
      <p className={SkillsStyle.title}>
        <span className="pink">#</span>
        Навыки
      </p>
      <div className={SkillsStyle.wrapper}>
        <img src="/qube.svg" alt="" />
        <div className={SkillsStyle.table}>
          <Table
            title="Технологии"
            description="JavaScript TypeScript HTML5 CSS3(SCSS) Redux-Toolkit React-Router"
          />
          <Table
            title="Инструменты"
            description="VSCode Figma Git Vite Postman Npm"
          />
          <Table title="Фреймворки" description="React" />
          <Table title="Базы данных" description="Firebase" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
