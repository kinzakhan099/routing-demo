"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  const { articleid } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          News Article <span className="text-blue-600">{articleid}</span>
        </h1>

        {/* Language Info */}
        <p className="text-gray-600 mb-6">
          Reading in language:{" "}
          <span className="font-semibold text-blue-600 uppercase">{lang}</span>
        </p>

        {/* Language Switcher */}
        <div className="flex justify-center gap-6">
          <Link
            href={`/articles/${articleid}?lang=en`}
            className={`px-4 py-2 rounded-lg transition ${
              lang === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            English
          </Link>
          <Link
            href={`/articles/${articleid}?lang=fr`}
            className={`px-4 py-2 rounded-lg transition ${
              lang === "fr"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            French
          </Link>
          <Link
            href={`/articles/${articleid}?lang=es`}
            className={`px-4 py-2 rounded-lg transition ${
              lang === "es"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Spanish
          </Link>
        </div>
      </div>
    </div>
  );
}
