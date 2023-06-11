import "@/styles/globals.css";
import "typeface-open-sans";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans">
      <Component {...pageProps} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MJBN3X1TSW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MJBN3X1TSW');
        `}
      </Script>
    </div>
  );
}
