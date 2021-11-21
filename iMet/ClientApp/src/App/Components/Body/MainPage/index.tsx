import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Interaction } from "../../../../types/models";
import { InteractionCard } from "./Card/Card";
import { Container } from "./Container/Container";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { loadInteractions } from "./reducers/interactionSlice";
import { useDispatch, useSelector } from "react-redux";
import { getInteractions } from "./selectors";

export const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const interactions = useSelector(getInteractions);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/interactions");
        dispatch(loadInteractions(data.interactions as Interaction[]));
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
      <div>
        <Typography textAlign="center" mb="5rem" variant="h3">
          MainPage
        </Typography>

        {!loading ? (
          interactions.map((i) => <InteractionCard key={`ic-` + i.id} {...i} />)
        ) : (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <CircularProgress size="4rem" disableShrink color="secondary" />
          </Box>
        )}
      </div>
    </Container>
  );
};
