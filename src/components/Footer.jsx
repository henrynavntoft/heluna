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
    <footer className=" text-center p-4 my-4 border border-black">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">HELUNA</span>. All rights reserved.
      </p>
      <p>
        {date
          ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
          : ""}
      </p>
    </footer>
  );
}
