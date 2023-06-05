import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="p-4 bg-primary">
      <main>{children}</main>
    </div>
  );
}
