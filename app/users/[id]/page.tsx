import { notFound } from "next/navigation";

interface PageProps {
  params: { id: number }; //Stores the id/slug from the page url query
}

export default function UserDetailPage({ params }: PageProps) {
  if (params.id > 10) notFound();
  return <main>User: {params.id}</main>;
}
