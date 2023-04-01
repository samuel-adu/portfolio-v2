import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Adu | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <div>
        <h1 className="text-5xl mb-1">Samuel Adu</h1>
        <span className="font-thin">frontend developer</span>

        <div className="relative w-full h-72">
          <Image src="/../public/images/illustration-mobile.avif" alt="" fill />
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/theadusamuel"
            target="_blank"
            rel="noopener noreferrer"
            className={`${utilStyles.btn} ${utilStyles.btnPrimary}`}
          >
            GitHub
            <i class="fa-brands fa-github ml-2"></i>
          </a>
          <a
            href="#portfolio"
            className={`${utilStyles.btn} ${utilStyles.btnSecondary}`}
          >
            Go To Portfolio
          </a>
        </div>

        <hr className={utilStyles.hr} />

        <h2 className="text-4xl text-center">About Me</h2>

        <p className="text-base">
          I’m a front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
        </p>

        <p>
          I’m based in Lagos, Nigeria, I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I never miss playing football on saturday morning because I
          can not afford gym membership and I need to stay fit.
        </p>

        <p>I’d love you to check out my work.</p>

        <hr className={utilStyles.hr} />
      </div>

      <Portfolio />

      <Contact />
    </>
  );
}
