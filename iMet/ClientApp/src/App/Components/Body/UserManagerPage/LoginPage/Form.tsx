import { Button, FormLabel, Input } from "@mui/material";
import { Box } from "@mui/system";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface IFormInput {
  email: string;
  password: string;
}

export const Form = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } =
    useForm<IFormInput>(formOptions);
  const { errors } = formState;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const login = async () => {
      try {
        const response = await axios.post("/login", data);
        console.info(response.data);
        if (response.data) {
          console.info("logged in");
          // redirect na zeď
        } else {
          console.warn("not logged in :(");
          // display error
        }
      } catch (error) {
        const err = error as Error;
        console.error(err.message);
      }
    };

    login();
  };

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
          <FormLabel>E-mail</FormLabel>
          <Input
            defaultValue="lorem.ipsum@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "E-mail is required"}

          <FormLabel>Password</FormLabel>
          <Input
            defaultValue="test123"
            {...register("password", { required: true })}
            type="password"
          />
          {errors.password?.type === "required" && "Password is required"}
          {errors.password?.message}

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: "1rem" }}
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </Box>
  );
};
