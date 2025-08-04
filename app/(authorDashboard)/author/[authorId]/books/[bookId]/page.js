"use client";

import { api } from "@/utils/auth/authorApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BookPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bookId) {
      api
        .get(`/books/${bookId}`)
        .then((response) => {
          setBook(response.data.data);
          console.log("Single Book: ", response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching book:", error);
        })
        .finally(() => setLoading(false));
    }
  }, [bookId]);

  if (loading) return <p>Loading book details...</p>;
  if (!book) return <p>Book not found.</p>;

  const {
    title,
    description,
    ebook_price,
    cover_image_url,
    total_pages,
    categories,
    first_name,
    last_name,
    ebook_file_url,
    unique_book_id, 
    language,
  } = book;

  const displayPrice = ebook_price
    ? `₦${(ebook_price / 100).toFixed(2)}`
    : "N/A";

  const displayGenre =
    categories && Array.isArray(categories) && categories.length > 0
      ? categories[0].main // If categories is an array with items
      : "N/A";

  // Publication date: Your sample JSON doesn't include 'publication_date' but 'created_at'
  const displayPublicationDate = book.created_at
    ? new Date(book.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  const displayLength = total_pages ? `${total_pages} Pages` : "N/A";
  
  return (
    <div className="md:p-4 lg:ml-64  mt-24">
      <div className="sm:flex sm:space-x-4">
        <div className="">
          {cover_image_url && (
            <div className="">
              <h2 className="text-x2l font-bold">Ebook Details</h2>
              <img
                className="h-60 w-64 object-cover rounded-lg mt-4"
                src={cover_image_url}
                alt={title}
              />
              <p className="mt-2">Book Type: Ebook</p>
            </div>
          )}
        </div>
        <div className="w-full mt-9">
          <div className="flex justify-between items-center max-w-[450px] md:max-w-[600px]">
            <div>
              <p className="font-bold">{title}</p>
              <p className="text-gray-600">
                by:{" "}
                <span className="font-bold">
                  {first_name || "Author's FirstName"}{" "}
                  {last_name || "Author's LastName"}
                </span>
              </p>
            </div>
            <p className="text-2xl font-bold">${ebook_price}</p>
          </div>
          <p className="mt-4">{description || "No description available."}</p>
          <Link
            href={ebook_file_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 py-1 px-2 rounded-md text-white mt-3"
          >
            Read
          </Link>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[700px] grid grid-cols-6 text-center border-t border-b py-4 mt-5">
          <div className="border-0 border-r-2 text-center">
            <strong>GENRE</strong>
            <p>{displayGenre}</p>
          </div>
          <div className="border-0 border-r-2">
            <strong>PUBLICATION DATE</strong>
            <p>{displayPublicationDate}</p>
          </div>
          <div className="border-0 border-r-2">
            <strong>LANGUAGE</strong>
            <p>English</p>
          </div>
          <div className="border-0 border-r-2">
            <strong>UBID</strong>
            <p>{unique_book_id}</p>
          </div>
          <div className="border-0 border-r-2">
            <strong>LENGTH</strong>
            <p>{"length"}</p>
          </div>
          <div>
            <strong>SIZE</strong>
            <p>{"size"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
