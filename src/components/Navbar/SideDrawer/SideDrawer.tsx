import { Link } from 'react-router-dom';
import NavbarList from '../NavbarList/NavbarList';
import Button from '../../Button/Button';

import classes from './_SideDrawer.module.scss';

type SideDrawerProps = {
  close: () => void;
}

const SideDrawer = ({close} : SideDrawerProps) => {
    
  return (
    <>
      <div className={classes.sidedrawer}>
        <NavbarList closeMenu={close} />
        <Link to="./contact">
          <Button classes={'navbar__contact'} onClick={close}>Contact Me</Button>
        </Link>
        
      </div>
    </>
    
    
    
  )
}

export default SideDrawer;