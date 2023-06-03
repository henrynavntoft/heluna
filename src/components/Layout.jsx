import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-4xl px-4">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
