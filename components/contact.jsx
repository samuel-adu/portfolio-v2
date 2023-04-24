/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <div id="contact" className="mx-auto sm:w-1/2">
      <div>
        <h2 className="text-center text-4xl font-semibold">Get in Touch</h2>
        <p className="text-center">
          Do you have a job opportunity or a project I can be a part of? Feel
          free to reach me at{" "}
          <span className="text-primary-100">theadusamuel@gmail.com</span>, you
          may also leave me a message using the form below and I'll get back to
          you.
        </p>
      </div>

      <hr className="my-6 border-t border-solid border-neutral-400 sm:hidden" />

      <div>
        <form className="flex flex-col">
          <label className="mb-2 block w-full" htmlFor="fullName">
            Name
          </label>
          <input
            className="mb-6 block h-12 w-full rounded bg-neutral-400 px-6 py-2 placeholder:font-primary placeholder:text-xs"
            type="text"
            name="fullName"
            placeholder="Jane Appleseed"
          />

          <label className="mb-2 block w-full" htmlFor="email">
            Email Address
          </label>
          <input
            className="mb-6 block h-12 w-full rounded bg-neutral-400 px-6 py-2 placeholder:font-primary placeholder:text-xs"
            type="text"
            name="email"
            placeholder="email@example.com"
          />

          <label className="mb-2 block w-full" htmlFor="fullName">
            Message
          </label>
          <textarea
            className="mb-6 block h-24 w-full resize-none rounded bg-neutral-400 px-6 py-2 placeholder:font-primary placeholder:text-xs"
            type="text"
            placeholder="How can I help?"
          />

          <button
            className="pointer mb-6 inline-block h-12 w-full rounded bg-primary-100 px-6 py-2 text-xs uppercase tracking-widest text-neutral-100 hover:bg-primary-400 md:ml-auto md:w-48"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
