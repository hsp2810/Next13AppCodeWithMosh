"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function CreateUser() {
  const router = useRouter();

  return (
    <main>
      <button
        className='btn'
        onClick={() => {
          router.push("/users");
        }}
      >
        Create User
      </button>
    </main>
  );
}
