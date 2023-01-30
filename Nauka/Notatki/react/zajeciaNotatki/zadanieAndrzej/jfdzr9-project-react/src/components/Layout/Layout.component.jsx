import { BackgroundSVG } from "../ui/BackgroundSVG/BackgroundSVG.styled";
import Toggle from "../Toggle/Toggle.component";
import Background from "../../assets/desktop/bg-pattern-header.svg";
import DevJobsLogo from "../../assets/desktop/logo.svg";

const Layout = ({ children }) => {
  return (
    <>
      <BackgroundSVG style={{ backgroundImage: `url(${Background})` }} />
      <header>
        <a href="/">
          <img src={DevJobsLogo} alt="devjobs logo" />
        </a>
        <Toggle />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
