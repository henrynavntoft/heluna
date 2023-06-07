import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 mb-4 border-2 rounded-lg text-primary border-primary bg-secondary">
      <Link href="/">
        <span className="text-2xl font-semibold text-primary cursor-pointer">
          HELUNA
        </span>
      </Link>
      <nav className="flex space-x-4 justify-center items-center">
        <Link href="/">
          <span className="font-semibold cursor-pointer hover:text-accent hidden md:visible">
            About
          </span>
        </Link>
        <Link href="/">
          <span className="font-semibold cursor-pointer hover:text-accent hidden md:visible">
            Works
          </span>
        </Link>
        <Button href="mailto:info@heluna.dk" buttonText="CONTACT" />
      </nav>
    </header>
  );
}
