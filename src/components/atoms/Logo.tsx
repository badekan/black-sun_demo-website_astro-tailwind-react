import { tv } from 'tailwind-variants';
import Icon, { IconName } from './Icon'

/* Types */
export enum LogoSize {
  Small = 'sm',
  Medium = 'md',
}

export enum LogoColor {
  Black = 'black',
  White = 'white',
}

interface LogoProps {
  size?: LogoSize;
  color?: LogoColor;
  className?: string;
}

/* Style */
const logo = tv({
  base: [
    "inline-block",
  ],
  variants: {
    size: {
      md: "w-[180px] h-[28px]",
      sm: "w-[121px] h-[18px]",
    },
    color: {
      black: "text-black",
      white: "text-white",
    },
    defaultVariants: {
      size: "md",
      color: "black",
    },
  },
});


/* Component */
const Logo = (props: LogoProps) => {
  const { size, className, color } = props;
  return (
    <Icon className={logo({color, size, class: className})} name={IconName.BlackSun} />
  );
};

export default Logo;

