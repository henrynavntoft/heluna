import "@/styles/globals.css";
import "typeface-open-sans";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <GoogleAnalytics measurementId="G-MJBN3X1TSW" />
      <Component {...pageProps} />
    </div>
  );
}
