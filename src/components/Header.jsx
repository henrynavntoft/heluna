import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 m-4 text-primary border-primary bg-secondary">
      <Link href="/">
        <span className="text-2xl font-bold text-primary cursor-pointer">
          HELUNA
        </span>
      </Link>
      <nav className="md:flex space-x-8 justify-center items-center hidden">
        <Link href="/about">
          <span className="cursor-pointer hover:underline">About</span>
        </Link>
        <Link href="/works">
          <span className="cursor-pointer hover:underline">Works</span>
        </Link>
        <Button href="/contact" buttonText="CONTACT" />
      </nav>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`transition-all duration-500 ${
            isOpen ? "hidden" : "text-primary"
          }`}
        >
          MENU
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-secondary text-primary flex flex-col items-center justify-center space-y-8 z-10 md:hidden">
          <span
            className="text-primary cursor-pointer mb-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            CLOSE MENU
          </span>
          <Link href="/about">
            <span className="cursor-pointer">About</span>
          </Link>
          <Link href="/works">
            <span className="cursor-pointer">Works</span>
          </Link>
          <Button href="/contact" buttonText="CONTACT" />
        </div>
      )}
    </header>
  );
}
