interface PageProps {
  params: { id: number; photoid: number }; //Stores the id/slug from the page url query
}

export default function Photo({ params }: PageProps) {
  return <main>Photo: {params.photoid}</main>;
}
