import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 mb-4 border-2 rounded text-primary border-primary bg-secondary">
      <Link href="/">
        <span className="text-2xl font-semibold">HELUNA</span>
      </Link>
      <nav>
        <Link href="/">
          <span className=" font-semibold">MENU</span>
        </Link>
      </nav>
    </header>
  );
}
