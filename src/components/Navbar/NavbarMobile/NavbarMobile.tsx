import { useState } from 'react';
import Logo from '../../Logo/Logo';
import LogoSvg from '../../../assets/logoipsum-216.svg';

import classes from './_NavbarMobile.module.scss';
import SideDrawer from '../../Navbar/SideDrawer/SideDrawer';

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

  return (
    <>
        <nav className={classes.header__navbar}>
        <Logo image={{ src: LogoSvg, alt: "ipsum logo svg" }} className="navbar__logo" />
        <a 
            className={`${classes["navbar__hamburger"]} ${isOpen ? classes.active : ''}`} 
            onClick={() => { setIsOpen(!isOpen) }}>
            <div className={classes.hamburger__line}></div>
            <div className={classes.hamburger__line}></div>
            <div className={classes.hamburger__line}></div>
        </a>
        </nav>
        {isOpen &&
            <SideDrawer close={closeMenu} />
        }
    </>        
)
};

export default NavbarMobile;