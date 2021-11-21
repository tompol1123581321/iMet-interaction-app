import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "../../MainPage/Container/Container";
import { Form } from "./Form";

export const LoginPage = () => {
  return (
    <Container>
      <Typography variant="h4" className="m-auto">
        Please login
      </Typography>
      <Form />
    </Container>
  );
};
