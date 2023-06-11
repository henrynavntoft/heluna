import "@/styles/globals.css";
import "typeface-open-sans";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <Component {...pageProps} />
    </div>
  );
}
