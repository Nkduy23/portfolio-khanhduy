import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CursorFollower from "../components/animation/CursorFollower";

export default function MainLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <CursorFollower />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
