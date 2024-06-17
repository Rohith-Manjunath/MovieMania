"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NavMenuItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      href={`/?genre=${param}`}
      className={`text-xl font-semibold hover:opacity-70 hover:cursor-pointer hover:scale-105 transition-all duration-200 ${
        genre === param
          ? "underline underline-offset-8 decoration decoration-4 decoration-black"
          : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavMenuItem;
