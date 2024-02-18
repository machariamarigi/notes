"use client";

import { Id } from "@/convex/_generated/dataModel";
import exp from "constants";

interface MenuProps {
  documentId: Id<"documents">;
}

export const Menu = ({ documentId }: MenuProps) => {
  return <div>Menu!</div>
}
