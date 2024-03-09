"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface PublishProps {
  initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
  return (
    <div>
      <h1>Publish</h1>
    </div>
  );
};
