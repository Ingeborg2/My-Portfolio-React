import NavbarMobile from "../Navbar/NavbarMobile/NavbarMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop/NavbarDesktop";
import useMediaQuery from "../../hooks/UseMediaQuery";

import topbarScss from './_Topbar.module.scss';

const Topbar = () => {
  const screenMatches = useMediaQuery("(min-width: 768px)");

  return (
    <header className={topbarScss.header}> 
        {screenMatches ? <NavbarDesktop /> : <NavbarMobile />}
    </header>
  );
};

export default Topbar;