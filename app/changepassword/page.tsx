"use client";

import React, { useState } from "react";

export default function ChangePassword() {
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const handleSubmit = async () => {
    const response = await fetch("/api/changepassword", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ password, newPassword }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <main className='flex flex-col gap-2 w-[20%] m-auto'>
      <input
        type='text'
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
        placeholder='Enter your old'
      />
      <input
        type='text'
        value={newPassword}
        onChange={(e: any) => setNewPassword(e.target.value)}
        placeholder='Enter your password'
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </main>
  );
}
