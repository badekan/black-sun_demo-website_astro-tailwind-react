import React from 'react';

import Chat from '../../icons/chat.svg?react';
import ArrowNext from '../../icons/arrow-next.svg?react';
import ArrowPrev from '../../icons/arrow-prev.svg?react';

interface IconProps {
  name: IconName;
  className?: string;
}
export enum IconName {
  Chat = 'chat',
  ArrowNext = 'arrow-next',
  ArrowPrev = 'arrow-prev',
}

const icons = {
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