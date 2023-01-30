import { ToggleWrapper, ToggleButton } from "./Toogle.styled";
import SunIcon from "../../assets/desktop/icon-sun.svg";
import MoonIcon from "../../assets/desktop/icon-moon.svg";

const Toggle = () => {
  return (
    <ToggleWrapper>
      <img src={SunIcon} alt="light mode icon" />
      <ToggleButton />
      <img src={MoonIcon} alt="dark mode icon" />
    </ToggleWrapper>
  );
};

export default Toggle;
