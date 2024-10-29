import React from 'react';
import { tv } from 'tailwind-variants';
import hoverBaseAndVariant from '../../utils/hoverBaseAndVariant';

import type { IconName } from './Icon';
import Icon from './Icon';

/* Types */
export enum ButtonColor {
  Primary = 'primary',
  Black = 'black',
  White = 'white',
}

export interface ButtonData {
  color?: ButtonColor;
  label: string;
  icon?: IconName;
  href?: string;
}

interface ButtonProps {
  className?: string;
  data: ButtonData;
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
  const { data, className } = props;
  const { color, label, icon, href } = data;

  return (
    <a className={button({ color, class: className })} href={href}>
      {label}
      {icon && <Icon name={icon} className={"-mr-[0.375rem]" /* 6px / 16 = .375rem */}/>}
    </a>
  );
};

export default Button;