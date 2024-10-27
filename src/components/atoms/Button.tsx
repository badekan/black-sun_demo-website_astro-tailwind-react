import React from 'react';
import { tv } from 'tailwind-variants';
import hoverBaseAndVariant from '../../utils/hoverBaseAndVariant';

import type { IconName } from './Icon';
import Icon from './Icon';

/* Typescript */
export enum ButtonVariant {
  Primary = 'primary',
  Black = 'black',
  White = 'white',
}

interface ButtonProps {
  className?: string;
  variant?: ButtonVariant;
  label: string;
  icon?: IconName;
}

/* Style */
const button = tv({
  extend: hoverBaseAndVariant,
  base: [
    "items-center min-h-btn text-white rounded-lg inline-flex px-4 py-[11px] gap-2",
  ],
  variants: {
    color: {
      primary: true,
      black: true,
      white: true,
    },
  },
  defaultVariants: {
    color: 'primary'
  }
});

/* Component */
const Button = (props: ButtonProps) => {
  const { variant, label, icon, className } = props;
  return (
    <button className={button({ color: variant, class: className })}>
      {label}
      {icon && <Icon name={icon} className={"-mr-[0.375rem]" /* 6px / 16 = .375rem */}/>}
    </button>
  );
};

export default Button;