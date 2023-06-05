import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="p-4 bg-primary">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
