import Navbar from "./navbar";
import Footer from "./footer";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className={utilStyles.container}>{children}</main>
      <Footer />
    </div>
  );
}
