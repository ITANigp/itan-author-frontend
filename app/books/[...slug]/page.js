"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookBySlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // fetch(`/api/v1/books/by-slug/${slug}`)
    fetch(`http://localhost:3000/api/v1/books/by-slug/${slug}`)

      .then((res) => {
        if (!res.ok) throw new Error("Book not found");
        return res.json();
      })
      .then((data) => {
        setBook(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading book...</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>By {book.first_name} {book.last_name}</p>
      <img src={book.cover_image_url} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}
