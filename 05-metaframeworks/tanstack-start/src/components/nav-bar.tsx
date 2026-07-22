import { Link } from "@tanstack/react-router";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 border-b-neutral-800">
      <Link to="/" search={{ search: "" }}>
        <h1 className="text-2xl font-bold">TanStack Start Lab</h1>
      </Link>
      <div className="flex gap-4">
        <Link to="/" search={{ search: "" }} className="hover:text-blue-500">
          Home
        </Link>
      </div>
    </nav>
  );
}
