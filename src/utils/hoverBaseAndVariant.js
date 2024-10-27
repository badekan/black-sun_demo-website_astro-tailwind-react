import { tv } from 'tailwind-variants';

const hoverBaseAndVariant = tv({
  base: [
      "transition-btn duration-300 cursor-pointer", /* Base */ 
      "active:shadow-[0_0_0_2px_rgba(0,0,0,1)]", /* Active */ 
      "focus-visible:outline-2", /* Focus Visible */ 
      "hover:shadow-[0_0_0_1px_rgba(0,0,0,1)]", /* Hover */ 
    ],
  variants: {
    color: {
      primary: [
        "bg-primary-500", /* Base */ 
        "hover:shadow-primary-600 hover:bg-primary-600", /* Hover */ 
        "active:shadow-primary-600", /* Active */ 
        "focus-visible:outline-gray-500/[.3]", /* Focus Visible */ 
      ],
      black: [
        "bg-black", /* Base */ 
        "hover:shadow-black hover:bg-black", /* Hover */ 
        "active:shadow-black", /* Active */ 
        "focus-visible:black/[.05]", /* Focus Visible */ 
      ],
      white: [
        "bg-white text-black", /* Base */ 
        "hover:shadow-white hover:bg-white", /* Hover */ 
        "active:shadow-white", /* Active */ 
        "focus-visible:white/[.05]", /* Focus Visible */ 
      ],
      gray: [
        "bg-gray-200", /* Base */ 
        "hover:shadow-gray-300 hover:bg-gray-300", /* Hover */ 
        "active:shadow-gray-300", /* Active */ 
        "focus-visible:gray-300/[.05]", /* Focus Visible */ 
      ],
      whiteFade: [
        "bg-white/[.15]", /* Base */ 
        "hover:shadow-white/[.2] hover:bg-white/[.2]", /* Hover */ 
        "active:shadow-white/[.2]", /* Active */ 
        "focus-visible:outline-white/[.05]", /* Focus Visible */ 
      ],
    },
  },
});


export default hoverBaseAndVariant;