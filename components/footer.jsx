import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-10 bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="container">
        <div className="py-14 sm:flex sm:flex-row-reverse sm:justify-between sm:p-0">
          <ul className="my-4 items-center gap-8 text-center sm:order-2 sm:flex">
            <li className="py-4 text-xs uppercase">
              <a href="#">Home</a>
            </li>
            <li className="py-4 text-xs uppercase">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="py-4 text-xs uppercase">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ul className="mb-8 flex items-center justify-center gap-4 sm:order-1 sm:m-0">
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
                  src="/icons/frontend-mentor.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-2 sm:order-3">
            <Image src="/icons/logo.svg" alt="" width={40} height={20} />
            <small className="text-xs">
              Copyright &copy; {new Date().getFullYear()} Samuel Adu
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
