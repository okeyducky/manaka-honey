import { useState } from "react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavIcons from './NavIcons';
import {
  Bars3BottomLeftIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";



const NavMobile = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  return (
    <div className="navbar md:hidden">
      <div className="w-1/5 flex justify-start items-center">
        <div onClick={():void=> setToggle(!toggle)}>
        {toggle ? <XMarkIcon className="headerIcon" /> : <Bars3BottomLeftIcon className="headerIcon" />}
        </div>
        <div className={`${!toggle ? "h-0" : 'flex h-auto'} nav-links-mobile-container`}>
          <ul className="nav-links-mobile">
            <NavLinks />
          </ul>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center ">
        <NavLogo />
      </div>

      <NavIcons />
    </div>
  );
};

export default NavMobile;