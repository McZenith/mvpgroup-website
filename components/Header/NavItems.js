import React from "react";
import { Box } from "grommet";
import { NavItem } from "./index";

const NavItems = props => {
  const { data } = props;
  return (
    <Box
      fill="vertical"
      justify="between"
      width="40vw"
      direction="row"
      align="center"
    >
      {data.map(item => (
        <NavItem name={item.name} key={item.name} />
      ))}
    </Box>
  );
};

export default NavItems;
