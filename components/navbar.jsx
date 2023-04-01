import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={utilStyles.container}>
        <div className={`${styles.navbar} `}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.svg" alt="" width={60} height={30} />
          </Link>
          <span className="font-mono mr-auto">theadusamuel</span>

          {/* <i className="fa-regular fa-moon text-2xl"></i> */}
          <i className="fa-solid fa-sun text-2xl"></i>
        </div>
      </div>
    </nav>
  );
}
