import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavIcons from './NavIcons';


const Nav = () => {
   return (
      <div className="navbar hidden md:flex">
         <div className="flex items-center justify-start md:w-1/5">
            <NavLogo />
         </div>

         <ul className="nav-links">
            <NavLinks />
         </ul>

         <NavIcons />
      </div>
   );
};

export default Nav;