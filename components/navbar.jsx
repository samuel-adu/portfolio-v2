import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className={utilStyles.container}>
        <div className={`${styles.navbar} `}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo.svg" alt="" width={60} height={30} />
          </Link>

          <button>
            <Image
              src="/../images/icons/hamburger.svg"
              alt=""
              width={24}
              height={12}
              className={styles.hamburger}
            />
          </button>

          <ul className={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">Portfolio</Link>
            </li>
            <li>
              <Link href="">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
