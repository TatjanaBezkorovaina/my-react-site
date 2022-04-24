import { Icon } from "@iconify/react";
import React from "react";
import { useTheme } from "../../contexts/use-theme";
import "./button.scss";

const Button = () => {
  // eslint-disable-next-line
  const { theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme("light");
  };
  const handleDarkThemeClick = () => {
    setTheme("dark");
  };
  return (
    <>
      <div className="btn__group">
        <button className="btn" onClick={handleLightThemeClick}>
          <Icon icon="bxs:sun" />
        </button>
        <button className="btn" onClick={handleDarkThemeClick}>
          <Icon icon="emojione-monotone:crescent-moon" />
        </button>
      </div>
    </>
  );
};

export default Button;
