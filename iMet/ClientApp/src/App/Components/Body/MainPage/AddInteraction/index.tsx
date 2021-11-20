import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "../Container/Container";
import { Form } from "./Form";

export const AddInteractionPage = () => {
  return (
    <Container>
      <Typography variant="h4" className="m-auto">
        Add Interaction Page
      </Typography>
      <Form />
    </Container>
  );
};
