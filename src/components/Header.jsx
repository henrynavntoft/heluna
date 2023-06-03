import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 my-4 border border-black">
      <Link href="/" className="text-2xl font-semibold">
        HELUNA
      </Link>
      <nav>
        <a className="text-xl font-semibold">MENU</a>
      </nav>
    </header>
  );
}
