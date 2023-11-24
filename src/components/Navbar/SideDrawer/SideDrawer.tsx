import { Link } from 'react-router-dom';
import NavbarList from '../NavbarList/NavbarList';
import Button from '../../Button/Button';

import sideDrawerScss from './_SideDrawer.module.scss';

type SideDrawerProps = {
  close: () => void;
}

const SideDrawer = ({close} : SideDrawerProps) => {
    
  return (
    <>
      <div className={sideDrawerScss.sidedrawer}>
        <NavbarList closeMenu={close} prefix="sidedrawer-navbar" />
        <Link to="./contact">
          <Button classes={sideDrawerScss.navbar__contact} onClick={close}>Contact Me</Button>
        </Link>
        
      </div>
    </>
    
    
    
  )
}

export default SideDrawer;