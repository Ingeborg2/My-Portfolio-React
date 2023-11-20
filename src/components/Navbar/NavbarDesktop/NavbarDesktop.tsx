import { NavLink } from "react-router-dom";

import Logo from '../../../components/Logo';
import LogoSvg from '../../../assets/logoipsum-216.svg';

import classes from './_NavbarDesktop.module.scss';

const NavbarDesktop = () => {
  return (
    <nav className={classes["header__navbar-desktop"]}>
      <Logo image={{ src: LogoSvg, alt: "ipsum logo svg" }} className="navbar__logo" />
      <ul className={classes.navbar__list}>
          <li className={classes.navbar__item}>
            <NavLink 
              to="/"
              className={`${classes["navbar__link"]} ({ isActive }) => (isActive ? 'navbar__linkactive' : '')}`}>
                Home
            </NavLink>
          </li>
          <li className={classes.navbar__item}>
            <NavLink 
              to="/about"
              className={`${classes["navbar__link"]} ({ isActive }) => (isActive ? 'active' : '')}`}>
                About
            </NavLink>
          </li>
          <li className={classes.navbar__item}>
            <NavLink 
              to="/projects"
              className={`${classes["navbar__link"]} ({ isActive }) => (isActive ? 'active' : '')}`}>
                About
            </NavLink>
          </li>
      </ul>
      <button className={classes.navbar__contact}>Contact Me</button>
    </nav>
  )
  
};

export default NavbarDesktop;