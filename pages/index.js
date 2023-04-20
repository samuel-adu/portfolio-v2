import Head from "next/head";
import Image from "next/image";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";

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

      <div className="mb-12 sm:grid sm:grid-cols-2 sm:gap-8">
        <div>
          <h1 className="mb-0 font-heading text-5xl font-bold text-primary-700 sm:text-6xl">
            Samuel Adu
          </h1>
          <span className="font-body text-xs font-thin uppercase tracking-widest text-primary-100">
            frontend developer
          </span>

          <div className="relative h-72 w-full">
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
              className="my-4 w-40 cursor-pointer rounded border border-solid border-primary-400 py-4 text-center font-body text-xs uppercase tracking-widest text-primary-700 hover:bg-primary-700 hover:text-neutral-100"
            >
              Go To Portfolio
            </a>
            <a
              href="#contact"
              className="my-4 w-40 cursor-pointer rounded border border-solid border-primary-400 bg-primary-400 py-4 text-center font-body  text-xs uppercase tracking-widest text-neutral-100 hover:border-primary-100 hover:bg-primary-100"
            >
              Contact me
            </a>
          </div>
        </div>

        <hr className="my-6 border-t border-solid border-neutral-400 sm:hidden" />

        <div>
          <h2 className="font-heading text-4xl font-bold sm:text-left">
            About Me
          </h2>

          <p>
            I’m a front-end developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required.
          </p>

          <p>
            I’m based in Lagos, Nigeria, I’m happy working remotely and have
            experience in remote teams. When I’m not coding, you’ll find me
            outdoors.
          </p>

          <p>I’d love you to check out my work.</p>
        </div>
      </div>

      <hr className="my-6 border-t border-solid border-neutral-400 sm:hidden" />

      <Portfolio />

      <Contact />
    </>
  );
}
