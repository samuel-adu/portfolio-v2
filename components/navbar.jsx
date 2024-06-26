import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className="mb-16 border-b border-solid border-neutral-200 dark:border-neutral-700">
      <div className="container">
        <div className="flex items-center py-8">
          <Link href="/" className="mr-1">
            <Image src="/icons/logo.svg" alt="" width={60} height={30} />
          </Link>
          <span className="mr-auto font-mono">thesamueladu</span>

          <ul className="mx-4 hidden items-center gap-4 sm:flex">
            <li>
              <a
                href="https://github.com/samuel-adu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500"
              >
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samuel-oa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500"
              >
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            type="button"
            className="hover:text-primary-500"
          >
            {theme === "light" ? (
              <i className="fa-regular fa-moon text-2xl"></i>
            ) : (
              <i className="fa-solid fa-sun text-2xl"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
