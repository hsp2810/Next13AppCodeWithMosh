import React, { ReactNode } from "react";

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <main className='flex'>
      <aside className='bg-gray-100 p-5'>Sidebar</aside>
      <div>{children}</div>
    </main>
  );
}
