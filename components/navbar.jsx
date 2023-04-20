import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-8 border-b border-solid border-neutral-400">
      <div className="container">
        <div className="flex items-center py-8">
          <Link href="/" className="mr-1">
            <Image src="/images/logo.svg" alt="" width={60} height={30} />
          </Link>
          <span className="mr-auto font-mono">theadusamuel</span>

          <ul className="mx-4 hidden items-center gap-4 sm:flex">
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
