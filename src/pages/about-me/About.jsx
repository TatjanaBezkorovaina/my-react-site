import React from "react";
import { useTranslation } from "react-i18next";
import "./about.scss";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about">
        <h2>{t("about")}</h2>
      </div>
    </>
  );
};

export default About;
