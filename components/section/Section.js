import React, { useContext } from "react";
import { ResponsiveContext } from "grommet";
import { OBox, IBox } from "./index.js";

const Section = props => {
  const {
    children,
    oHeight,
    background,
    align,
    justify,
    iWidth,
    border
  } = props;
  let size = useContext(ResponsiveContext);
  return (
    <OBox
      oHeight={oHeight}
      background={size !== "small" ? background : "brand"}
      border={border}
    >
      <IBox
        direction={size === "small" ? "column-reverse" : "row"}
        align={align}
        justify={justify}
        iWidth={iWidth}
      >
        {children}
      </IBox>
    </OBox>
  );
};

export default Section;
