"use client";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => reload()}>Try Again</button>
    </div>
  );
};

export default error;
