import React, { useState } from "react";
import { Box, Text } from "grommet";

const NavItem = props => {
  const { name } = props;
  const [isShown, setIsShown] = useState(false);
  return (
    <Box
      align="center"
      fill="vertical"
      justify="center"
      margin={{ bottom: "-10px" }}
      border={
        isShown
          ? {
              color: "#E65C85",
              size: "2px",
              style: "solid",
              side: "bottom"
            }
          : null
      }
    >
      {
        <Text
          color={isShown ? "#E65C85" : "#B2B2B2"}
          size="15px"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {name}
        </Text>
      }
    </Box>
  );
};

export default NavItem;
