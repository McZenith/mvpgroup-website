import React from "react";
import { Box } from "grommet";

const OBox = props => {
  const { oHeight, background, round, children, border } = props;
  return (
    <Box
      height={oHeight}
      fill="horizontal"
      background={background}
      align="center"
      justify="center"
      basis="auto"
      flex
      responsive
      border={border || null}
      round={round || null}
    >
      {children}
    </Box>
  );
};

export default OBox;
