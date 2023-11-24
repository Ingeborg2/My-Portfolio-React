import { Link } from "react-router-dom";

import Logo from '../../Logo/Logo';
import LogoSvg from '../../../assets/logoipsum-216.svg';
import NavbarList from "../NavbarList/NavbarList";
import Button from "../../Button/Button";

import navbarDesktopScss from './_NavbarDesktop.module.scss';

const NavbarDesktop = () => {

  return (
    <nav className={navbarDesktopScss.header__navbar}>
      <Logo image={{ src: LogoSvg, alt: "ipsum logo svg" }} className="navbar__logo" />
      <NavbarList prefix="header-navbar"/>
      <Link to="./contact">
          <Button classes={navbarDesktopScss["header-navbar__contact"]}>Contact Me</Button>
        </Link>
    </nav>
  )
  
};

export default NavbarDesktop;