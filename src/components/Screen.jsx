import React, {
  useState,
  useContext,
  useEffect
} from "react";
import {
  AppContext
} from "../context/Appcontext";
import {
  useTheme
} from "../hooks/useTheme";

const Screen = () => {
  const {
    value,
    error
  } = useContext(AppContext);
  const {
    screenBackground,
    textTertiary
  } = useTheme();
  useEffect(() => {
    if (error) {
      window.alert(error);
    }
    return () => {};
  },
    [error]);

  return (
    <div
      style={ { background: screenBackground }}
      className="w-auto   m-5 h-16 rounded-lg pr-1 text-right overflow-x-hidden  space-y-2 py-2"
      >
      <div
        style={ { color: textTertiary }}
        className="font-bold text-3xl overflow-y-hidden"
        >
        {value}
      </div>
    </div>
  );
};

export default Screen;