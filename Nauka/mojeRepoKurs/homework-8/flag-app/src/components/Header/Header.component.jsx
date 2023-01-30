import { DarkModeButton } from "../DarkLightMode/DarkLightModeButton.component";
import { LightModeButton } from "../DarkLightMode/DarkLightModeButton.component";
import HeaderWrapper from "./Header.styled";
const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Where in the world?</h1>
      <DarkModeButton />
    </HeaderWrapper>
  );
};

export default Header;
