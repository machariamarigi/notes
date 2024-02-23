"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface ToolbarProps {
  initalData: Doc<"documents">;
  preview?: boolean;
}

export const Toolbar = ({ initalData, preview }: ToolbarProps) => {
  return <div>Toolbar</div>;
};
