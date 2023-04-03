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

          <ul className="hidden sm:flex gap-4 items-center mx-4">
            <li>
              <a
                href="https://github.com/theadusamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/theadusamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.frontendmentor.io/profile/theadusamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/frontend-mentor.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>

          {/* <i className="fa-regular fa-moon text-2xl"></i> */}
          <i className="fa-solid fa-sun text-2xl"></i>
        </div>
      </div>
    </nav>
  );
}
