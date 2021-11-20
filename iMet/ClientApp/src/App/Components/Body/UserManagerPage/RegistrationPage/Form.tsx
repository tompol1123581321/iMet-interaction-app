import { Button, FormLabel, Input } from "@mui/material";
import { Box } from "@mui/system";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Form = () => {

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const {
        register,
        handleSubmit,
        reset,
        formState
    } = useForm<IFormInput>(formOptions);
    const { errors } = formState;

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const register = async () => {
            try {
                await axios.post("/register", data);
            } catch (error) {
                const err = error as Error;
                console.error(err.message);
            }
        };

        register();
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
                    <FormLabel>First name</FormLabel>
                    <Input
                        defaultValue="Lorem"
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName?.type === 'required' && "First name is required"}

                    <FormLabel>Last name</FormLabel>
                    <Input
                        defaultValue="Ipsum"
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName?.type === 'required' && "Last name is required"}

                    <FormLabel>E-mail</FormLabel>
                    <Input
                        defaultValue="lorem.ipsum@gmail.com"
                        {...register("email", { required: true })}
                    />
                    {errors.email?.type === 'required' && "E-mail is required"}

                    <FormLabel>Password</FormLabel>
                    <Input
                        defaultValue="test123"
                        {...register("password", { required: true })}
                        type="password"
                    />
                    {errors.password?.type === 'required' && "Password is required"}
                    {errors.password?.message}

                    <FormLabel>Confirm password</FormLabel>
                    <Input
                        defaultValue="test123"
                        {...register("confirmPassword", { required: true })}
                        type="password"
                    />
                    {errors.confirmPassword?.type === 'required' && "Confirm password is required"}
                    {errors.confirmPassword?.message}

                    <Button variant="contained" color="primary" sx={{ marginTop: '1rem' }} type="submit">
                        Register
                    </Button>
                </div>
            </form>
        </Box>
    );
};