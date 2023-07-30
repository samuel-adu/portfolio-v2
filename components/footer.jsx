import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-10 bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="container">
        <div className="gap- flex items-center justify-center gap-4 py-8">
          <Image src="/icons/logo.svg" alt="" width={40} height={20} />
          <small className="text-xs">
            Designed and Built by Samuel Adu &copy; {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </footer>
  );
}
