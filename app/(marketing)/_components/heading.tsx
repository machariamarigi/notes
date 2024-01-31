"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-x6xl font-bold">
        Your Ideas, Notes, Documents, and Plans. All in one place. Welcome to{" "}
        <span className="underline">Notes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notes is a note taking app
      </h3>
      <Button>
        Enter Notes <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
