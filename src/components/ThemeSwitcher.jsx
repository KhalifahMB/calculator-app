import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { changeTheme, currentTheme } = useContext(ThemeContext);
  const [togleStye, settogleStye] = useState({});
  const themes = [1, 2, 3];

  useEffect(() => {
    switch (currentTheme) {
      case "theme1":
        return settogleStye({
          transform: "translateX(0rem)",
        });
      case "theme2":
        return settogleStye({
          transform: "translateX(1rem)",
        });
      case "theme3":
        return settogleStye({
          transform: "translateX(2rem)",
        });

      default:
        break;
    }

    return () => {};
  }, [currentTheme]);

  const {
    toggleBackground,

    keyShadow1,
    keyBackgroundtoggle,
    keyBackground2,
    keyShadow2,
    keyShadow3,
    textMain,
    textSecondary,
    textTertiary,
  } = useTheme();

  return (
    <div className="flex items-center text-sm mx-2  h-full space-x-1">
      <h1 className=" self-end font-black" style={{ color: textTertiary }}>
        THEME
      </h1>
      <div>
        <div className="w-14 flex items-center justify-between px-1">
          {themes.map((theme) => {
            return (
              <span
                key={theme}
                onClick={() => {
                  if (currentTheme == `theme${theme}`) {
                    return;
                  }
                  changeTheme(theme);
                }}
                className="font-black cursor-pointer  transition-all delay-0"
                style={{ color: textTertiary }}
              >
                {theme}
              </span>
            );
          })}
        </div>
        <div
          className="w-14 px-1 rounded-xl h-5   mx-1 flex items-center"
          style={{
            background: toggleBackground,
          }}
        >
          <span
            className="w-4 h-4 rounded-full"
            style={{
              ...togleStye,
              background: keyBackgroundtoggle,
              transitionDelay: "0.2s",
              transitionTimingFunction: "linear",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
