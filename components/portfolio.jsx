import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./portfolio.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2 className="text-4xl text-center">Portfolio</h2>

      <div className="grid gap-4 md:grid-cols-4">
        <div className={styles.card}>
          <div className="relative w-full h-72">
            <Image
              src="/../public/images/portfolio/mobile/image-portfolio-manage@2x.jpg"
              alt=""
              fill
              // width={311}
              // height={288}
              className={styles.cardImg}
            />
          </div>

          <div className={styles.cardText}>
            <h3 className="text-3xl">
              <Link href="/manage">Manage</Link>
            </h3>
            <p className="text-base">
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className="relative w-full h-72">
            <Image
              src="/../public/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg"
              alt=""
              fill
              // width={311}
              // height={288}
              className={styles.cardImg}
            />
          </div>
          <div className={styles.cardText}>
            <h3 className="text-3xl">
              <Link href="/bookmark">Bookmark</Link>
            </h3>
            <p className="text-base">
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              features section.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className="relative w-full h-72">
            <Image
              src="/../public/images/portfolio/mobile/image-portfolio-insure@2x.jpg"
              alt=""
              fill
              // width={311}
              // height={288}
              className={styles.cardImg}
            />
          </div>

          <div className={styles.cardText}>
            <h3 className="text-3xl">
              <Link href="/insure">Insure</Link>
            </h3>
            <p className="text-base">
              This was a small project which mostly consisted of HTML and CSS. I
              built a fully-responsive landing page. The only JavaScript this
              project required was to enable the toggling of the mobile
              navigation.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className="relative w-full h-72">
            <Image
              src="/../public/images/portfolio/mobile/image-portfolio-fylo@2x.jpg"
              alt=""
              fill
              // width={311}
              // height={288}
              className={styles.cardImg}
            />
          </div>

          <div className={styles.cardText}>
            <h3 className="text-3xl">
              <Link href="/fylo">Fylo</Link>
            </h3>
            <p className="text-base">
              This project was built in pure HTML and CSS. I had mobile and
              desktop designs to work to and built it so that it was
              fully-responsive. I took a mobile-first approach and used modern
              CSS like Flexbox and Grid for layout purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
