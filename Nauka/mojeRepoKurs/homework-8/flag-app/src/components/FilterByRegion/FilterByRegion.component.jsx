import { Dropbtn, DropSVG } from "./FilterByRegion.styled";
import { DropdownContent } from "./FilterByRegion.styled";
import { DropdownContentLi } from "./FilterByRegion.styled";
import { Dropdown } from "./FilterByRegion.styled";
import { DropdownContentButton } from "./FilterByRegion.styled";
import { useState } from "react";

export const FilterByRegion = ({ filter, setFilter }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleMenuOne = () => {
    setFilter("Africa");
    setOpen(false);
  };
  const handleMenuTwo = () => {
    setFilter("America");
    setOpen(false);
  };
  const handleMenuThree = () => {
    setFilter("Asia");
    setOpen(false);
  };
  const handleMenuFour = () => {
    setFilter("Europe");
    setOpen(false);
  };
  const handleMenuFive = () => {
    setFilter("Oceania");
    setOpen(false);
  };
  const handleMenuSix = () => {
    setFilter("");
    setOpen(false);
  };
  let name = "Filter by region";

  if (!(filter === "")) {
    name = filter;
  }

  return (
    <Dropdown onClick={handleOpen}>
      <Dropbtn>{name}</Dropbtn>
      {open ? (
        <DropdownContent>
          <DropdownContentLi>
            <DropdownContentButton onClick={handleMenuOne}>
              Africa
            </DropdownContentButton>
          </DropdownContentLi>
          <DropdownContentLi>
            <DropdownContentButton onClick={handleMenuTwo}>
              America
            </DropdownContentButton>
          </DropdownContentLi>
          <DropdownContentLi>
            <DropdownContentButton onClick={handleMenuThree}>
              Asia
            </DropdownContentButton>
          </DropdownContentLi>
          <DropdownContentLi>
            <DropdownContentButton onClick={handleMenuFour}>
              Europe
            </DropdownContentButton>
          </DropdownContentLi>
          <DropdownContentLi>
            <DropdownContentButton onClick={handleMenuFive}>
              Oceania
            </DropdownContentButton>
          </DropdownContentLi>
          <DropdownContentLi>
            <DropdownContentButton onClick={handleMenuSix}>
              All
            </DropdownContentButton>
          </DropdownContentLi>
        </DropdownContent>
      ) : null}
      <DropSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
      </DropSVG>
    </Dropdown>
  );
};
