import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#004A7C] text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">My Website</h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Login Button */}
        <Link
          href="/login"
          className="ml-6 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition shadow"
        >
          Login
        </Link>

        {/* Mobile Menu Button (hamburger) */}
        <button className="md:hidden p-2 rounded hover:bg-[#E8F1F5] hover:text-[#004A7C] transition-colors">
          ☰
        </button>
      </nav>
    </header>
  );
}
