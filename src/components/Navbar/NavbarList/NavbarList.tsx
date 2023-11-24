import { NavLink } from 'react-router-dom';
import NavbarListScss from './_NavbarList.module.scss';

type NavbarListProps = {
  closeMenu?: () => void;
  prefix: string;
}

const NavbarList = ({closeMenu, prefix} : NavbarListProps) => {
  const listSelector = `${prefix}__list`;
  const itemSelector = `${prefix}__item`;
  const linkSelector = `${prefix}__link`;

  return (   
    <ul className={NavbarListScss[listSelector]}>
        <li className={NavbarListScss[itemSelector]} onClick={closeMenu}>
            <NavLink 
              to="/"
              end
              className={({ isActive }) =>
                [
                  NavbarListScss[linkSelector],
                  isActive ? NavbarListScss.active : null
                ]
                  .filter(Boolean)
                  
                  .join(" ")
              }>
                Home
            </NavLink>
          </li>
          <li className={NavbarListScss[itemSelector]} onClick={closeMenu}>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                [
                  NavbarListScss[linkSelector],
                  isActive ? NavbarListScss.active : null
                ]
                  .filter(Boolean)
                  .join(" ")
              }>
                About
            </NavLink>
          </li>
          <li className={NavbarListScss[itemSelector]} onClick={closeMenu}>
            <NavLink 
              to="/projects"
              className={({ isActive }) =>
                [
                  NavbarListScss[linkSelector],
                  isActive ? NavbarListScss.active : null
                ]
                  .filter(Boolean)
                  .join(" ")
              }>
                Projects
            </NavLink>
          </li>
    </ul>    
  )
}

export default NavbarList;