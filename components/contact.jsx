import styles from "./contact.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="sm:w-3/5 mx-auto">
      <div>
        <h2 className="text-4xl text-center">Get in Touch</h2>
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
          <ul className="flex gap-4 my-4">
            <li>
              <a
                href="https://www.linkedin.com/in/theadusamuel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/theadusamuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/github.svg"
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
                  src="/images/icons/frontend-mentor.svg"
                  // src="/favicon-32x32.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>

          <div className="my-2">
            <i className="fa-sharp fa-solid fa-envelope mr-4"></i>
            <span>theadusamuel@gmail.com</span>
          </div>

          <div className="my-2">
            <i className="fa-sharp fa-solid fa-phone mr-4"></i>
            <span>+234-803-152-2927</span>
          </div>
        </div>
      </div>

      <hr className={`${utilStyles.hr} sm:hidden`} />

      <div id="contact">
        <h2 className="text-4xl text-center">Contact Me</h2>

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

          <button
            className={`${styles.formControl} sm:w-1/4 mr-auto`}
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
