import { useEffect, useState } from "react";

export default function Footer() {
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(new Date());
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-center p-4 mt-4 border-2 text-primary border-primary bg-secondary rounded">
      <p className="mb-4 md:mb-0">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">HELUNA</span>. All rights reserved.
      </p>
      <p className="text-accent">
        {date
          ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
          : ""}
      </p>
    </footer>
  );
}
