import React from "react";
import { Icon } from "@iconify/react";
import "./socials.scss";

const Socials = () => {
  return (
    <>
      <div className="social">
        <div className="social__wrapper">
          <a
            className="social__item"
            href="https://t.me/Tetiana_BTV"
            target={"_blanc"}
          >
            <Icon className="icon" icon="fa-brands:telegram-plane" />
          </a>
          <a
            className="social__item"
            href="viber://chat?number=%2B380663231524"
            target={"_blanc"}
          >
            <Icon className="icon" icon="jam:viber" />
          </a>
          <a
            className="social__item"
            href="https://linkedin.com/in/Tetiana-BTV"
            target={"_blanc"}
          >
            <Icon className="icon" icon="dashicons:linkedin" />
          </a>
          <a
            className="social__item"
            href="https://www.facebook.com/TetianaBTV"
            target={"_blanc"}
          >
            <Icon className="icon" icon="dashicons:facebook-alt" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
