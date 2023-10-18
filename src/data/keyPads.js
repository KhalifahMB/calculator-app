export const dataCollection = [
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
        childClass: "btn",
        styles: {
          backgroundColor: keyBackground2,
          color: textMain,
        },
        content: "/",
      },
      {
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
        childClass: "btn",
        styles: {
          backgroundColor: keyBackground1,
          color: textSecondary,
        },
        content: "RESET",
      },
      {
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
