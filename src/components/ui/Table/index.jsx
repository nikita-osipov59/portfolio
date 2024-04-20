import React from "react";

import tableStyle from "./Table.module.scss";

export const Table = ({ title, description }) => {
  return (
    <div className={tableStyle.table}>
      <div className={tableStyle.title}>{title}</div>
      <div className={tableStyle.description}>{description}</div>
    </div>
  );
};
