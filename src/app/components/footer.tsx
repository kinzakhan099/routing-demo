// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}
// This component defines a footer with copyright information for the website.