import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../Header.styled.components";

export const Navbar = () => {
    return (
        <StyledNavbar>
            <Button className="mx-2" variant="contained" color="secondary">
                <Link to="/">MainPage</Link>
            </Button>
            <Button className="mx-2" variant="contained" color="secondary">
                <Link to="/addInteraction">Add Interaction</Link>
            </Button>
            <Button className="mx-2" variant="contained" color="secondary">
                <Link to="/registration">registration</Link>
            </Button>
            <Button className="mx-2" variant="contained" color="secondary">
                <Link to="/login">login</Link>
            </Button>
        </StyledNavbar>
    );
};
