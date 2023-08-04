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
    <footer className="flex flex-col md:flex-row justify-between items-center text-center p-4 m-4  text-primary  bg-secondary ">
      <p className="m-2 text-accent ">
        {date
          ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
          : ""}
      </p>
      <p className="m-2">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold">HELUNA</span>
      </p>
    </footer>
  );
}
