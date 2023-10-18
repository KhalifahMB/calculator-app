import React, { useContext } from "react";
import { useTheme } from "../hooks/useTheme";
import { AppContext } from "../context/appcontext";
// import { dataCollection } from "../data/keyPads";
const KeyPads = () => {
  const { value, update_value, delete_value, reset_value, eveluate } =
    useContext(AppContext);

  const {
    keypadBackground,
    keyBackground1,
    keyShadow1,
    keyBackgroundtoggle,
    keyBackground2,
    keyShadow2,
    keyShadow3,
    textMain,
    textSecondary,
  } = useTheme();
  const handleClick = (number) => {
    const operators = ["/", "+", "-", "*"];
    const lastCharacter = String(value).slice(-1);

    // Check if the input number is '.' and the last character is not an operator and doesn't already contain a '.'
    if (
      number === "." &&
      !operators.includes(lastCharacter) &&
      !String(value).includes(".")
    ) {
      update_value(number);
    } else if (number !== "." || operators.includes(lastCharacter)) {
      update_value(number);
    }
  };
  const handleDelete = (number) => {
    delete_value();
  };
  const handleReset = (number) => {
    reset_value();
  };
  const handleEval = (number) => {
    eveluate();
  };
  const dataCollection = [
    {
      parentClass: "grid grid-cols-4 gap-3 my-2 h-full w-full",
      children: [
        {
          onClick: () => handleClick(7),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "7",
        },
        {
          onClick: () => handleClick(8),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "8",
        },
        {
          onClick: () => handleClick(9),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "9",
        },
        {
          onClick: () => handleDelete(),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground1,
            color: textSecondary,
          },
          content: "Del",
        },
      ],
    },
    {
      parentClass: "grid grid-cols-4 gap-3 my-2 h-full w-full",
      children: [
        {
          onClick: () => handleClick(4),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "4",
        },
        {
          onClick: () => handleClick(5),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "5",
        },
        {
          onClick: () => handleClick(6),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "6",
        },
        {
          onClick: () => handleClick("+"),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "+",
        },
      ],
    },
    {
      parentClass: "grid grid-cols-4 gap-3 my-2 h-full w-full",
      children: [
        {
          onClick: () => handleClick(1),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "1",
        },
        {
          onClick: () => handleClick(2),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "2",
        },
        {
          onClick: () => handleClick(3),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "3",
        },
        {
          onClick: () => handleClick("-"),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "-",
        },
      ],
    },
    {
      parentClass: "grid grid-cols-4 gap-3 my-2 h-full w-full",
      children: [
        {
          onClick: () => handleClick("."),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: ".",
        },
        {
          onClick: () => handleClick(0),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "0",
        },
        {
          onClick: () => handleClick("/"),
          childClass: "btn",

          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "/",
        },
        {
          onClick: () => handleClick("*"),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground2,
            color: textMain,
          },
          content: "x",
        },
      ],
    },
    {
      parentClass: "grid grid-cols-2 gap-3 my-2 h-full w-full",
      children: [
        {
          onClick: () => handleReset(),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackground1,
            color: textSecondary,
          },
          content: "RESET",
        },
        {
          onClick: () => handleEval(),
          childClass: "btn",
          styles: {
            backgroundColor: keyBackgroundtoggle,
            color: textSecondary,
          },
          content: "=",
        },
      ],
    },
  ];

  return (
    <div
      className={` w-auto h-full m-5 gap-2 flex flex-col mb-2 rounded-lg  p-3 `}
      style={{ backgroundColor: keypadBackground }}
    >
      {dataCollection.map((parent, index) => {
        return (
          <div key={index} className={parent.parentClass}>
            {parent.children.map((child, index) => {
              return (
                <div
                  key={index}
                  onClick={child.onClick}
                  className={child.childClass}
                  style={child.styles}
                >
                  {child.content}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyPads;
