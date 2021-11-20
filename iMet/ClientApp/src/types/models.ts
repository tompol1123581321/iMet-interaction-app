import React from "react";
import { User } from "./user";

export type Interaction = {
    id: number;
    type: number;
    created: string;
    user: User;
    target: User;
};
