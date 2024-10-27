import React, { useState } from 'react';
import { tv } from 'tailwind-variants';
import Logo, { LogoColor, LogoSize } from '../../atoms/Logo';
import ButtonBurger, { ButtonBurgerColor } from '../../atoms/ButtonBurger';
import Wrapper from '../../layouts/Wrapper';
import hoverBaseAndVariant from '../../../utils/hoverBaseAndVariant';
import Button, { ButtonVariant } from '../../atoms/Button';

/* Types */
interface HeaderMobileProps {
  nav: {
    label: string;
    href: string;
  }[];
}

/* Style */
const headerLinkMobile = tv({
  extend: hoverBaseAndVariant,
  base: [
    "font-semibold inline-flex w-full gap-5 px-4 py-4 rounded-lg",
  ],
  variants: {
    color: {
      whiteFade: true,
    }
  }
});

const headerSideBar = tv({
  base: [
    "fixed flex justify-end w-full h-full right-0 top-0 z-50 bg-gray-900/[.8] text-white transition-transform duration-300",
  ],
  variants: {
    state: {
      open: "translate-x-0",
      close: "translate-x-full",
    }
  }
});

const HeaderMobile: React.FC<HeaderMobileProps> = ({ nav }) => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    console.log('isActive:', isActive)
    setIsActive(!isActive);
  };

  return (
    <div className="block lg:hidden ">
      <div className="flex mx-auto items-center justify-between">
        <Logo size={LogoSize.Medium} className="hidden xs:inline-block"/>
        <Logo size={LogoSize.Small} className="inline-block xs:hidden"/>
        <ButtonBurger color={ButtonBurgerColor.Black} onClick={handleBurgerClick} active={isActive}/>
      </div>
      <div className={headerSideBar({ state: isActive ? 'open' : 'close' })} >
        <div className="w-4/5 h-full bg-gray-900">
          <Wrapper>
            <div className="flex mx-auto items-center justify-between my-10">
              <Logo size={LogoSize.Medium} color={LogoColor.White} className="hidden xs:inline-block"/>
              <Logo size={LogoSize.Small} color={LogoColor.White} className="inline-block xs:hidden"  />
              <ButtonBurger color={ButtonBurgerColor.White} onClick={handleBurgerClick} active={isActive}/>
            </div>
            <ul className="flex flex-col justify-center">
              {nav.map((item) => (
                <li className="mb-4" key={item.href}>
                  <a className={headerLinkMobile({ color: 'whiteFade' })} href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <Button label="Contact us" variant={ButtonVariant.White} className='w-full' />
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;