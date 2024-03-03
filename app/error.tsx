"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        alt="Error"
        src="/error.png"
        height="300"
        width="300"
        className="dark:hidden"
      />
      <Image
        alt="Error"
        src="/error-dark.png"
        height="300"
        width="300"
        className="hidden dark:block"
      />
      <h2>Something Went Wrong</h2>
      <Button asChild>
        <Link href="/documents">Go Back</Link>
      </Button>
    </div>
  );
};

export default Error;
