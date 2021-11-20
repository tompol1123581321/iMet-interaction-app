import React from "react";
import { StyledBodyContainer } from "../Main.styled.components";

type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = (props) => {
  return <StyledBodyContainer>{props.children}</StyledBodyContainer>;
};
