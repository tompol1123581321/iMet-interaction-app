import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "../../MainPage/Container/Container";
import { Form } from "./Form";

export const RegistrationPage = () => {
  return (
    <Container>
      <Typography variant="h4" className="m-auto">
        Hello! Please register. Everything is required.
      </Typography>
      {/* <Form /> */}
    </Container>
  );
};
