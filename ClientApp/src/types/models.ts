import React from "react";

type Reaction = {
  type: 1 | 0;
  userId: number;
  userName: "string";
};

export type Interaction = {
  interactionId: number;
  userId: number;
  userName: string;
  type: "online" | "offline";
  date: any;
  targetId: number;
  targetName: string;
  reactions?: Reaction[];
};
