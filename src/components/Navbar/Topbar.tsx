import NavbarMobile from "./NavbarMobile/NavbarMobile";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import useMediaQuery from "../../hooks/UseMediaQuery";

import classes from './_Topbar.module.scss';

const Topbar = () => {
  const screenMatches = useMediaQuery("(min-width: 768px)");

  return (
    <header className={classes.header}> 
        {screenMatches ? <NavbarDesktop /> : <NavbarMobile />}
    </header>
  );
};

export default Topbar;