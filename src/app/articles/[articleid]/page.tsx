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
    const {articleid} = use(params) ;
    const {lang = "en"} = use(searchParams);
  return (
    <div>
      <h1>News article {articleid}</h1>
      <p>Reading in language {lang} </p>
      <div>
        <Link href={`/articles/${articleid}?lang=en`}>English</Link>
        <Link href={`/articles/${articleid}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleid}?lang=es`}>Spanish</Link>
      </div>
    </div>
  );
}
