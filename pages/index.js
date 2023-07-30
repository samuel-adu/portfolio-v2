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
              className="my-4 w-40 cursor-pointer rounded border border-solid border-neutral-400 py-4 text-center text-xs uppercase tracking-widest text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
            >
              Portfolio
            </a>
            <a
              href="../resume.pdf"
              target="_blank"
              className="my-4 w-40 cursor-pointer rounded border border-solid border-primary-500 bg-primary-500 py-4 text-center  text-xs uppercase tracking-widest text-neutral-100 hover:border-primary-700 hover:bg-primary-700"
            >
              Résumé
            </a>
          </div>
        </div>

        <hr className="my-6 border-t border-solid border-neutral-200 dark:border-neutral-700 sm:hidden" />

        <div className="flex-col justify-center lg:flex lg:w-3/4">
          <h2 className="text-3xl font-semibold sm:text-left">About Me</h2>

          <p>
            I’m a front-end developer focused on writing accessible HTML, using
            modern CSS practices and writing clean JavaScript. When writing
            JavaScript code, I mostly use React, but I can adapt to whatever
            tools are required.
          </p>

          <p>
            I’m based in Lagos, Nigeria, I’m happy working remotely and have
            experience in remote teams. When I’m not coding, you’ll find me
            outdoors. I’d love you to check out my work.
          </p>
        </div>
      </section>

      <hr className="my-6 border-t border-solid border-neutral-200 dark:border-neutral-700 sm:hidden" />

      <section id="portfolio">
        <h2 className="mb-8 text-3xl font-semibold">Featured Projects</h2>
        <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </section>

      <hr className="my-6 border-t border-solid border-neutral-200 dark:border-neutral-700 sm:hidden" />

      <section id="contact" className="mx-auto sm:w-1/2">
        <h2 className="text-center text-3xl font-semibold">Get in Touch</h2>
        <div className="text-center">
          <p className="text-center">
            Do you have a job opportunity or a project I can be a part of? Feel
            free to leave me a message and I'll get back to you as soon as
            possible.
          </p>

          <a
            href="mailto:theadusamuel@gmail.com"
            className="pointer my-4 inline-block rounded bg-primary-500 px-6 py-4 text-center text-xs uppercase tracking-widest text-neutral-100 hover:bg-primary-700"
          >
            contact me
          </a>
        </div>
      </section>
    </>
  );
}
