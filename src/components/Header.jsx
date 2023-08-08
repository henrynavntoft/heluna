import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-8 text-primary border-primary bg-grey">
      <Link href="/" className="z-20">
        <span className="text-2xl font-bold text-primary cursor-pointer">
          HELUNA
        </span>
      </Link>
      <nav
        className={`md:flex space-x-8 justify-center items-center hidden ${
          isOpen ? "hidden" : ""
        }`}
      >
        <Link href="/about">
          <span className="cursor-pointer hover:underline">SERVICES</span>
        </Link>
        <Link href="/works">
          <span className="cursor-pointer hover:underline">WORK</span>
        </Link>
        <Button href="/contact" buttonText="CONTACT" />
      </nav>
      <div className="md:hidden cursor-pointer z-20" onClick={toggleMenu}>
        <span
          className={`transition-all duration-500 ${
            isOpen ? "text-primary" : ""
          }`}
        >
          {isOpen ? "LUK" : "MENU"}
        </span>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-secondary text-primary flex flex-col items-center justify-center space-y-8 z-10 md:hidden">
          <Link href="/about">
            <span className="cursor-pointer">SERVICES</span>
          </Link>
          <Link href="/works">
            <span className="cursor-pointer">WORK</span>
          </Link>
          <Button href="/contact" buttonText="CONTACT" />
        </div>
      )}
    </header>
  );
}
