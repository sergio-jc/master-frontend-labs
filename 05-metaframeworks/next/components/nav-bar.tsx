import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 border-b-neutral-800">
      <Link href="/">
        <h1 className="text-2xl font-bold">Next Lab</h1>
      </Link>
      <div className="flex gap-4">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
      </div>
    </nav>
  );
}
