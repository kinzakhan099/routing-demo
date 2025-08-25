import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/about">About us</Link>
      <Link href="/products">Products</Link>
      <Link href="/services">Services</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>

      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>

    </>
  );
}
