/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import Project from "../components/project";
import { projects } from "../data.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Adu | Portfolio</title>
        <meta
          name="description"
          content="Frontend developer portfolio of Samuel Adu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <section className="mb-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12">
        <div>
          <h1 className="mb-0 text-5xl font-semibold sm:text-6xl">
            Samuel Adu
          </h1>
          <span className="text-xs font-light uppercase tracking-widest text-primary-400">
            frontend developer
          </span>

          <div className="relative my-4 h-72 w-full">
            <Image
              src="/images/illustration-mobile.avif"
              alt="developer sitting at a desk"
              fill
              className="sm:hidden"
            />
            <Image
              src="/images/illustration-desktop.avif"
              alt="developer sitting at a desk"
              fill
              className="hidden sm:block"
            />
          </div>

          <div className="flex justify-center gap-4 sm:justify-start">
            <a
              href="#portfolio"
              className="my-4 w-40 cursor-pointer rounded border border-solid border-primary-500 bg-primary-500 py-4 text-center  text-xs uppercase tracking-widest text-neutral-100 hover:border-primary-400 hover:bg-primary-400 dark:border-primary-600 dark:bg-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700"
            >
              Go to projects
            </a>
            <a
              href="../resume.pdf"
              target="_blank"
              className="my-4 w-40 cursor-pointer rounded border border-solid border-primary-500 py-4 text-center text-xs uppercase tracking-widest text-primary-500 hover:bg-primary-400 hover:text-neutral-100 dark:border-primary-600 dark:bg-neutral-800 dark:text-primary-600 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:hover:text-neutral-100"
            >
              Résumé
            </a>
          </div>
        </div>

        <hr className="my-6 border-t border-solid border-neutral-200 dark:border-neutral-700 sm:hidden" />

        <div className="flex-col justify-center lg:flex lg:w-full">
          <h2 className="text-3xl font-semibold sm:text-left">About</h2>

          <p>
            I’m a front-end developer focused on writing accessible HTML, using
            modern CSS practices and writing clean JavaScript. When writing
            JavaScript code, I mostly use React.
          </p>

          <h2 className="text-3xl font-semibold sm:text-left">Tech Stack</h2>
          <ul className="flex flex-wrap gap-1">
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              React.js
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              Next.js
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              JavaScript
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              HTML
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              CSS
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              TailwindCSS
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              Git
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              GitHub
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              Vercel
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              Figma
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              BEM
            </li>
            <li className="bg-neutral-200 px-2 py-1 text-xs font-light dark:bg-neutral-700">
              Responsive Web Design
            </li>
          </ul>
        </div>
      </section>

      <hr className="my-6 border-t border-solid border-neutral-200 dark:border-neutral-700 sm:hidden" />

      <section id="portfolio" className="my-16">
        <h2 className="mb-8 text-3xl font-semibold">Featured Projects</h2>
        <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </section>

      <hr className="my-6 border-t border-solid border-neutral-200 dark:border-neutral-700 sm:hidden" />

      <section id="contact" className="my-8 py-8 ">
        <h2 className="text-center text-3xl font-semibold">Get in Touch</h2>
        <div className="mx-auto text-center sm:w-1/2">
          <p className="text-center">
            Do you have a job opportunity or a project I can be a part of? Feel
            free to leave me a message and I'll get back to you as soon as
            possible.
          </p>

          <a
            href="mailto:theadusamuel@gmail.com"
            className="pointer my-4 inline-block rounded bg-primary-500 px-6 py-4 text-center text-xs uppercase tracking-widest text-neutral-100 hover:bg-primary-400 dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            contact me
          </a>
        </div>
      </section>
    </>
  );
}
