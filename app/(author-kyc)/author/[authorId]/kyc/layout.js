"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthorProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [authorId, setAuthorId] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("authorInfo") || "{}");
    if (!stored?.id) {
      alert("Sign in to continue!");
      router.push("/author/sign_in");
    } else {
      setAuthorId(stored.id);
    }
  }, [router]);

  if (!authorId) {
    return null; // Or a loading spinner
  }

  return <div>{children}</div>;
};

export default AuthorProtectedRoute;
