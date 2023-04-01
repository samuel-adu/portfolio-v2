import styles from "./contact.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <h2 className="text-4xl text-center md:text-left">Get in Touch</h2>
        <p className="text-base">
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in Lagos but I’m also happy to hear about opportunites that don’t fit
          that description.
        </p>
        <p className="text-base">
          I’m a hard-working and positive person who will always approach each
          task with a sense of purpose and attention to detail. Please do feel
          free to check out my online profiles below and get in touch using the
          form.
        </p>

        <div>
          <ul className="flex gap-4 my-8 items-center">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/../images/icons/linkedin.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank">
                <Image
                  src="/../images/icons/github.svg"
                  alt=""
                  width={24}
                  height={24}
                />
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
        </div>
      </div>

      <hr className={`${utilStyles.hr} sm:hidden`} />

      <div id="contact">
        <h2 className="text-4xl text-center md:text-left">Contact Me</h2>

        <form className={styles.form}>
          <label className={styles.formControl} htmlFor="fullName">
            Name
          </label>
          <input
            className={`${styles.formControl}`}
            type="text"
            name="fullName"
            placeholder="Jane Appleseed"
          />

          <label className={styles.formControl} htmlFor="email">
            Email Address
          </label>
          <input
            className={styles.formControl}
            type="text"
            name="email"
            placeholder="email@example.com"
          />

          <label className={styles.formControl} htmlFor="fullName">
            Message
          </label>
          <textarea
            className={styles.formControl}
            type="text"
            placeholder="How can I help?"
          />

          <button className={styles.formControl} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
