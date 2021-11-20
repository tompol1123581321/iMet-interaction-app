import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Interaction } from "../../../../types/models";
import { InteractionCard } from "./Card/Card";
import { Container } from "./Container/Container";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [interactions, setInteractions] = useState<Interaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/interactions");
        setInteractions(response.interactions);
      } catch (error) {
        const err = error as Error;
        console.error(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Typography textAlign="center" mb="5rem" variant="h3">
          MainPage
        </Typography>

        {!loading ? (
          interactions.map((i) => <InteractionCard key={`ic-` + i.id} {...i} />)
        ) : (
          <CircularProgress
            style={{
              position: "absolute",
              top: "47%",
              left: "43%",
              transform: "translate(-50%,-50%)",
              width: "5rem",
            }}
            color="secondary"
          />
        )}
      </div>
    </Container>
  );
};
