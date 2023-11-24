import { useState } from 'react';
import Logo from '../../Logo/Logo';
import LogoSvg from '../../../assets/logoipsum-216.svg';

import navbarMobileScss from './_NavbarMobile.module.scss';
import SideDrawer from '../../Navbar/SideDrawer/SideDrawer';

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

  return (
    <>
        <nav className={navbarMobileScss.header__navbar}>
        <Logo image={{ src: LogoSvg, alt: "ipsum logo svg" }} className="navbar__logo" />
        <a 
            className={`${navbarMobileScss["navbar__hamburger"]} ${isOpen ? navbarMobileScss.active : ''}`} 
            onClick={() => { setIsOpen(!isOpen) }}>
            <div className={navbarMobileScss.hamburger__line}></div>
            <div className={navbarMobileScss.hamburger__line}></div>
            <div className={navbarMobileScss.hamburger__line}></div>
        </a>
        </nav>
        {isOpen &&
            <SideDrawer close={closeMenu} />
        }
    </>        
)
};

export default NavbarMobile;