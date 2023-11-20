import { Link } from 'react-router-dom';

import classes from './_SideDrawer.module.scss';

const SideDrawer = () => {
    
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbar__list}>
          <li className={classes.navbar__item}>
            <Link className={classes.navbar__link} to="/">Home</Link>
          </li>
          <li className={classes.navbar__item}>
            <Link className={classes.navbar__link} to="/about">About Me</Link>
          </li>
          <li className={classes.navbar__item}>
            <Link className={classes.navbar__link} to="/projects">My Projects</Link>
          </li>
      </ul>
    </nav>
    
  )
}

export default SideDrawer;