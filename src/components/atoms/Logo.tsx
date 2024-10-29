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
export interface LogoData {
  label: string;
  href: string;
}

interface LogoProps {
  size?: LogoSize;
  color?: LogoColor;
  className?: string;
  data: LogoData;
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
  const { size, className, color, data } = props;
  const { href, label } = data;
  
  return (
    <a href={href} aria-label={label} className={className}><Icon className={logo({color, size})} name={IconName.BlackSun} /></a>
  );
};

export default Logo;

