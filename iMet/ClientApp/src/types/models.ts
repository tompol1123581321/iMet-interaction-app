import React from "react";

export type Interaction = {
  interactionId: number;
  userId: number;
  userName: string;
  type: "online" | "offline";
  date: any;
  targetId: number;
  targetName: string;
};
