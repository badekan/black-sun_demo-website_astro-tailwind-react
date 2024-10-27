import React from 'react';

import BlackSun from '../../icons/blacksun.svg?react';
import Chat from '../../icons/chat.svg?react';
import ArrowNext from '../../icons/arrow-next.svg?react';
import ArrowPrev from '../../icons/arrow-prev.svg?react';


/* Types */
interface IconProps {
  name: IconName;
  className?: string;
}

export enum IconName {
  BlackSun = 'blacksun',
  Chat = 'chat',
  ArrowNext = 'arrow-next',
  ArrowPrev = 'arrow-prev',
}

/* Component */
const icons = {
  [IconName.BlackSun]: BlackSun,
  [IconName.Chat]: Chat,
  [IconName.ArrowNext]: ArrowNext,
  [IconName.ArrowPrev]: ArrowPrev,
};

const Icon = (props: IconProps) => {
  const { name, className } = props;
  const SvgIcon = icons[name];
  return SvgIcon ? <SvgIcon className={className} /> : null;
};

export default Icon;