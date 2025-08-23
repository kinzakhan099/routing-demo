// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#004A7C] text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">My Website</h1>

        {/* Nav Links */}
   <ul className="list-none">
  <li className="inline-block mx-4"><Link href="/">Home</Link></li>
  <li className="inline-block mx-4"><Link href="/about">About</Link></li>
  <li className="inline-block mx-4"><Link href="/products">Products</Link></li>
  <li className="inline-block mx-4"><Link href="/services">Services</Link></li>
  <li className="inline-block mx-4"><Link href="/blog">Blog</Link></li>
  <li className="inline-block mx-4"><Link href="/faq">FAQ</Link></li>
  <li className="inline-block mx-4"><Link href="/contact">Contact</Link></li>
</ul>



        {/* Mobile Menu Button (hamburger) */}
        <button className="md:hidden p-2 rounded hover:bg-[#E8F1F5] hover:text-[#004A7C] transition-colors">
          ☰
        </button>
      </nav>
    </header>
  );
}
