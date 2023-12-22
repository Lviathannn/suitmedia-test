"use client";
// Contoh penggunaan di halaman Next.js
import { useEffect } from "react";
import axios from "axios";

const MyPage = () => {
  useEffect(() => {
    axios
      .get("/api/ideas", {
        params: {
          "page[number]": 1,
          "page[size]": 10,
          "append[]": ["small_image", "medium_image"],
          sort: "-published_at",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>{/* Komponen JSX halaman Anda */}</div>;
};

export default MyPage;
