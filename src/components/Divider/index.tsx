import React from "react";
import { DividerProps, DividerContainer } from "./styles";

const Divider = ({ height }: DividerProps) => {
  return <DividerContainer height={height} />;
};

export default Divider;
