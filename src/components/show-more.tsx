"use client"

import { useState } from "react";
import { Button } from "./ui";

export function ShowMore({ children, label }: { children: React.ReactNode, label: string }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-5">
      {showMore && children}
      <div className="flex flex-row justify-center mt-5">
        <Button
          onClick={() => setShowMore(m => !m)}
          className="uppercase"
        >
          {showMore ? "less" : "more"} {label}
        </Button>
      </div>
    </div>
  );
}
