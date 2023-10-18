import React from "react";
import { useTheme } from "../hooks/useTheme";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const { textTertiary } = useTheme();
  return (
    <>
      <div
        className=" text-[#ffffff] font-black"
        style={{ color: textTertiary }}
      >
        calc
      </div>
      <ThemeSwitcher />
    </>
  );
};

export default Header;
