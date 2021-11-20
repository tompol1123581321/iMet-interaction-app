import { Button, FormLabel, Input } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
          <Input
            sx={{ color: "white" }}
            defaultValue="test"
            {...(register("example"), { required: true })}
          />
          <FormLabel>When?</FormLabel>
          <Input
            sx={{ color: "white" }}
            defaultValue="test"
            {...(register("example"), { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <Button variant="outlined" color="secondary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};
