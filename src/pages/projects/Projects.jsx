import React from "react";
import { useTranslation } from "react-i18next";
import "./projects.scss";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="projects">
        <h2>{t("sites")}</h2>
      </div>
    </>
  );
};

export default Projects;
