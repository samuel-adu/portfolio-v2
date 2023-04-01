import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import utilStyles from "../styles/utils.module.css";
export default function Footer() {
  return (
    <footer className={`${styles.footer} mt-10`}>
      <div className={utilStyles.container}>
        <div className=" py-14 sm:p-0 sm:flex flex-row-reverse">
          <ul className="text-center sm:flex gap-8 my-4 sm:ml-auto items-center">
            <li className="py-4 uppercase text-xs">
              <Link href="/">Home</Link>
            </li>
            <li className="py-4 uppercase text-xs">
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li className="py-4 uppercase text-xs">
              <Link href="/#contact">Contact Me</Link>
            </li>
          </ul>

          <ul className="flex gap-4 items-center justify-center mb-8">
            <li>
              <i class="fa-brands fa-github text-2xl"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter text-2xl"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </li>
          </ul>

          <div className="flex gap-2 justify-center items-center">
            <Image src="/../images/logo.svg" alt="" width={61} height={32} />
            <small>
              Copyright &copy; {new Date().getFullYear()} Samuel Adu
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
