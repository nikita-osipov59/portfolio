import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { ROUTER_PATH } from "@/router/PATH";
import db from "@/../firebase";
import CardStyle from "./Card.module.scss";
import { Button } from "@/components/ui/Button";

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
            <img
              className={CardStyle.test2}
              src={project.imgUrl}
              alt="project"
            />
          </div>
          <p className={CardStyle.projectScpecs}>{project.specs}</p>
          <div className={CardStyle.projectInfo}>
            <p className={CardStyle.projectTitle}>{project.title}</p>
            <p className={CardStyle.projectDescription}>
              {project.description}
            </p>
            <Button
              icon="play"
              title="Live"
              href={ROUTER_PATH.PREVIEW + `/${project.link}`}
            />
          </div>
        </div>
      ))}
    </>
  );
};
