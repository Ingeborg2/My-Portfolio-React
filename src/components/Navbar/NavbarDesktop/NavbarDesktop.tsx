import { Link } from "react-router-dom";

import Logo from '../../Logo/Logo';
import LogoSvg from '../../../assets/logoipsum-216.svg';
import NavbarList from "../NavbarList/NavbarList";
import Button from "../../Button/Button";

import classes from './_NavbarDesktop.module.scss';

const NavbarDesktop = () => {

  return (
    <nav className={classes.header__navbar}>
      <Logo image={{ src: LogoSvg, alt: "ipsum logo svg" }} className="navbar__logo" />
      <NavbarList />
      <Link to="./contact">
          <Button classes={'navbar__contact'}>Contact Me</Button>
        </Link>
    </nav>
  )
  
};

export default NavbarDesktop;