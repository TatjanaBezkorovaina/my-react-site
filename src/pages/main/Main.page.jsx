import React from "react";
import { useTranslation } from "react-i18next";
import "./main.page.scss";
import { Icon } from "@iconify/react";

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="title__wrapper">
        <h1 className="title">{t("name")}</h1>
        <br />
        <h2 className="subtitle">{t("specialization")}</h2>
      </div>
      <div className="right-part">
        <div className="tag">
          <Icon className="tag__icon" icon="logos:google-tag-manager" />
        </div>
      </div>
    </>
  );
};

export default Main;
