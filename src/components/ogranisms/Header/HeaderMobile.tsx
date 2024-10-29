import React, { useState } from 'react';
import { tv } from 'tailwind-variants';
import Logo, { LogoColor, LogoSize } from '../../atoms/Logo';
import ButtonBurger, { ButtonBurgerColor } from '../../atoms/ButtonBurger';
import Wrapper from '../../layouts/Wrapper';
import hoverBaseAndVariant from '../../../utils/hoverBaseAndVariant';
import Button, { ButtonColor } from '../../atoms/Button';
import type { HeaderData } from './Header.astro';

/* Types */
interface HeaderMobileProps {
  data: HeaderData;
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

const headerSideBarWrapper = tv({
  base: [
    "fixed flex justify-end w-full h-full right-0 top-0 z-50 bg-gray-900/[.8] text-white transition-all duration-100",
  ],
  variants: {
    state: {
      open: "opacity-1",
      close: "pointer-events-none opacity-0",
    }
  }
});

const headerSideBar = tv({
  base: [
    "w-4/5 h-full bg-gray-900 transition-transform ",
    "ease-[cubic-bezier(.19,1,.22,1)] delay-100 duration-500", /* ease from https://www.sketch.com/ */
  ],
  variants: {
    state: {
      open: "translate-x-0",
      close: "translate-x-full",
    }
  }
});

/* Component */
const HeaderMobile = (props: HeaderMobileProps ) => {
  const { data } = props;
  const { logo, nav, button } = data;
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="block lg:hidden ">
      <div className="flex mx-auto items-center justify-between">
        {logo && (
          <>
            <Logo size={LogoSize.Medium} className="hidden xs:inline-block" data={logo}/>
            <Logo size={LogoSize.Small} className="inline-block xs:hidden" data={logo}/>
          </>
        )}
        <ButtonBurger color={ButtonBurgerColor.Black} onClick={handleBurgerClick} isActive={isActive}/>
      </div>
      <div className={headerSideBarWrapper({ state: isActive ? 'open' : 'close' })} >
        <div className={headerSideBar({state:  isActive ? 'open' : 'close' })}>
          <Wrapper>
            <div className="flex mx-auto items-center justify-between my-10">
              <Logo size={LogoSize.Medium} color={LogoColor.White} className="hidden xs:inline-block" data={logo}/>
              <Logo size={LogoSize.Small} color={LogoColor.White} className="inline-block xs:hidden" data={logo}/>
              <ButtonBurger color={ButtonBurgerColor.White} onClick={handleBurgerClick} isActive={isActive}/>
            </div>
            <ul className="flex flex-col justify-center">
              {nav.map((item) => (
                <li className="mb-4" key={item.href}>
                  <a className={headerLinkMobile({ color: 'whiteFade' })} href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            {button && (
              <Button data={{
                    label: button.label,
                    href: button.href,
                    color: ButtonColor.White,
                  }} className='w-full' />
            )}
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;