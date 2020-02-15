import React from "react";
import { Section } from "../section";
import { NavItems } from "./index";
import { Logo } from "../Logo";

const item = [
  { name: "WHAT WE DO" },
  { name: "WHO WE ARE" },
  { name: "OUR PORTFOLIO" },
  { name: "NEWS" },
  { name: "CONTACT" }
];

const Header = () => {
  return (
    <Section
      oHeight="15vh"
      background="white"
      justify="between"
      iWidth="96.5%"
      border={{
        color: "border",
        size: "0.5px",
        style: "solid",
        side: "bottom"
      }}
    >
      <Logo />
      <NavItems data={item} />
    </Section>
  );
};

export default Header;
