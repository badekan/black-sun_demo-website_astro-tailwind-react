import { tv } from 'tailwind-variants';
import React, { useState } from 'react';

/* Types */
export enum ButtonBurgerColor {
  Black = 'black',
  White = 'white',
}

interface ButtonBurgerProps {
  color: ButtonBurgerColor;
  active?: boolean;
  onClick: () => void;
}

/* Style */
const buttonBurger = tv({
  base: [
      "relative z-50 w-[30px] h-[30px] group transition-btn duration-300 rounded-md", /* Base */
      "hover:bg-gray-100 hover:shadow-[0_0_0_8px_rgba(0,0,0,1)] hover:shadow-gray-100", /* Hover */ 
      "active:shadow-[0_0_0_10px_rgba(0,0,0,1)] active:shadow-gray-100", /* Active */ 
    ],
  variants: {
    color: {
      black: [
        "hover:bg-gray-100 hover:shadow-gray-100", /* Hover */ 
        "active:shadow-gray-100", /* Active */ 
      ],
      white: [
        "hover:bg-white/[.2] hover:shadow-white/[.2]", /* Hover */ 
        "active:shadow-white/[.2]", /* Active */ 
      ],
    },
  },
  defaultVariants: {
    color: 'black',
  },
});

const lineTop = tv({
  base: [
      "h-[3px] absolute right-0 duration-300",
    ],
  variants: {
    state: {
      inactive: ["top-0 w-full group-hover:w-2/3"],
      active: ["right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-[315deg] w-4/5"],
    },
    color: {
      black: ["bg-black"],
      white: ["bg-white"],
    },
  },
});

const lineBottom = tv({
  base: [
    "w-2/3 h-[3px] absolute right-0 duration-300",
  ],
  variants: {
    state: {
      inactive: [" bottom-0 group-hover:w-full"],
      active: ["right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2 rotate-[225deg] w-4/5"],
    },
    color: {
      black: ["bg-black"],
      white: ["bg-white"],
    },
  },
});

/* Component */
const ButtonBurger = (props: ButtonBurgerProps) => {
  const { color, active,  onClick } = props;

  // const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    onClick();
  };

  return (
    <button className={buttonBurger({color})} onClick={handleClick}>
      <div className="w-[30px] h-[12px] relative">
        <div className={lineTop({color, state: active ? 'active':'inactive'})}></div>
        <div className={lineBottom({color, state: active ? 'active':'inactive'})}></div>
      </div>
    </button>
  );
};

export default ButtonBurger;