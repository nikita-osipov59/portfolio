import React from "react";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../../firebase";
import CardStyle from "./Card.module.scss";
import { Button } from "../Button";

export const Card = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "projects"), (snapshot) => {
      setProject(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <>
      {project.map((project) => (
        <div key={project.id} className={CardStyle.projectCard}>
          <div className={CardStyle.projectImg}>
            <img src={project.imgUrl} alt="project" />
          </div>
          <p className={CardStyle.projectScpecs}>{project.specs}</p>
          <div className={CardStyle.projectInfo}>
            <p className={CardStyle.projectTitle}>{project.title}</p>
            <p className={CardStyle.projectDescription}>
              {project.description}
            </p>
            <Button title="Live" href={project.linkUrl} />
          </div>
        </div>
      ))}
    </>
  );
};
