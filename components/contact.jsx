/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-center text-3xl font-semibold">Get in Touch</h2>
        <p className="text-center">
          Do you have a job opportunity or a project I can be a part of? Feel
          free to leave me a message and I'll get back to you as soon as
          possible.
        </p>

        <a
          href="mailto:theadusamuel@gmail.com"
          className="pointer my-6 inline-block rounded bg-primary-500 px-6 py-4 text-center text-xs capitalize tracking-widest text-neutral-100 hover:bg-primary-700"
        >
          Send Email
        </a>
      </div>
    </>
  );
}
