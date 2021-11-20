import React from "react";
import { User } from "./user";

type Reaction = {
  type: 1 | 0;
  userId: number;
  userName: "string";
};

export type Interaction = {
  id: number;
  type: number;
  created: string;
  user: User;
  target: User;
};
