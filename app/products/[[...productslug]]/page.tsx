import React from "react";

interface PageProps {
  params: {
    productslug: string[]; // Used to get the params
  };
  searchParams: { sortOrder: string }; // Used to get the query parameters
}

export default function ProductPage({
  params: { productslug },
  searchParams: { sortOrder },
}: PageProps) {
  return (
    <main>
      Product Slug: {productslug} Query Params: {sortOrder}
    </main>
  );
}

// Notes
/*
  [slug]: Stores one slug: /users/1
  [...slug]: Stores an array of slug : /users/web/new Slug: ["web", "new"]
  [[...slug]]: Same as the upper one but here the slug is not mandatory
*/
