import { Button, FormLabel, Input } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DateTime } from "luxon";
import axios from "axios";

type Inputs = {
  target: string;
  date: string;
  exampleRequired: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    axios.post("/newInteraction", data);
  const currTime = DateTime.now()
    .toISO()
    .substring(0, DateTime.now().toISO().length - 10);

  return (
    <Box
      mt="3rem"
      sx={{
        width: 300,
        height: 300,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FormLabel>Whom have I met?</FormLabel>
          <Input {...register("target", { required: true })} />

          <FormLabel sx={{ marginTop: "1rem" }}>When?</FormLabel>
          <Input
            defaultValue={currTime ?? ""}
            {...register("date", { required: true })}
            type="datetime-local"
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <Button
            sx={{ marginTop: "1rem" }}
            variant="outlined"
            color="secondary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};
