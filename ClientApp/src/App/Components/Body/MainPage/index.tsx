import { Typography } from "@mui/material";
import React from "react";
import { Interaction } from "../../../../types/models";
import { InteractionCard } from "./Card/Card";
import { Container } from "./Container/Container";

const testInterActions: Interaction[] = [
  {
    date: "1.1.2021",
    targetId: 1,
    targetName: "Tomas Polivka",
    interactionId: 1,
    type: "online",
    userId: 1,
    userName: "Martin Pražák",
  },
];

export const MainPage = () => {
  return (
    <Container>
      <div>
        <Typography textAlign="center" mb="5rem" variant="h3">
          MainPage
        </Typography>
        {testInterActions.map((i) => (
          <InteractionCard {...i} />
        ))}
      </div>
    </Container>
  );
};
