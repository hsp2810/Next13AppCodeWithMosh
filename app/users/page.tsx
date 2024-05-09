import React, { Suspense } from "react";
import UserTable from "./UserTable";

interface PageProps {
  searchParams: { sortOrder: string };
}

export default async function UsersPage({
  searchParams: { sortOrder },
}: PageProps) {
  return (
    <main className='mt-10 p-10'>
      <div className='overflow-x-auto'>
        <h1 className='text-3xl text-center uppercase'>All Users</h1>
        <Suspense
          fallback={
            <p className='text-white'>Loading the users. Please wait...</p>
          }
        >
          <UserTable sortOrder={sortOrder} />
        </Suspense>
      </div>
    </main>
  );
}
