import React from "react";
import { Box } from "grommet";

const IBox = props => {
  const { iHeight, iWidth, children, direction, align, justify } = props;
  return (
    <Box
      height={iHeight || "90%"}
      width={iWidth || "90%"}
      align={align || "center"}
      justify={justify || "center"}
      direction={direction}
    >
      {children}
    </Box>
  );
};

export default IBox;
