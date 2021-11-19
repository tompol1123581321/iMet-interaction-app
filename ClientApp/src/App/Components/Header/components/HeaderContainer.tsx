import React from "react";
import { StyledHeaderContainer } from "../Header.styled.components";
import { Navbar } from "./Navbar";

export const HeaderContainer: React.FC = () => {
  return (
    <StyledHeaderContainer className="d-flex justify-content-center align-items-center">
      <Navbar />
    </StyledHeaderContainer>
  );
};
