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
              <a href="">Home</a>
            </li>
            <li className="py-4 uppercase text-xs">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="py-4 uppercase text-xs">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>

          <ul className="flex gap-4 items-center justify-center mb-8">
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
                  src="/images/favicon-32x32.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>

          <div className="flex gap-2 justify-center items-center">
            {/* <Image src="/../images/logo.svg" alt="" width={61} height={32} /> */}
            <small>
              Copyright &copy; {new Date().getFullYear()} Samuel Adu
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
