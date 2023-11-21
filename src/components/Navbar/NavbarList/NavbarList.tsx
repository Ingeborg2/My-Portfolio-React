import { NavLink } from 'react-router-dom';
import classes from './_NavbarList.module.scss';

type NavbarListProps = {
  closeMenu?: () => void;
}

const NavbarList = ({closeMenu} : NavbarListProps) => {
  return (
    <ul className={classes.navbar__list}>
        <li className={classes.navbar__item} onClick={closeMenu}>
            <NavLink 
              to="/"
              className={({ isActive }) => (isActive ? 'navbar__link active' : 'navbar__link')}>
                Home
            </NavLink>
          </li>
          <li className={classes.navbar__item} onClick={closeMenu}>
            <NavLink 
              to="/about"
              className={({ isActive }) => (isActive ? 'navbar__link active' : 'navbar__link')}>
                About
            </NavLink>
          </li>
          <li className={classes.navbar__item} onClick={closeMenu}>
            <NavLink 
              to="/projects"
              className={({ isActive }) => (isActive ? 'navbar__link active' : 'navbar__link')}>
                Projects
            </NavLink>
          </li>
    </ul>
  )
}

export default NavbarList;