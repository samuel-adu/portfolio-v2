import Image from "next/image";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <div className="flex flex-col rounded border p-4 transition-all duration-150 ease-out hover:scale-105 sm:p-8">
      <div className="relative flex-1 rounded border">
        <div className="relative h-72 w-full">
          <Link href={project.liveUrl} target="_blank">
            <Image src={`/images/${project.img}`} alt="project preview" fill />
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-8">
        <h3 className="text-2xl font-semibold capitalize underline-offset-4 hover:text-primary-500 hover:underline hover:decoration-solid">
          <a href={project.liveUrl} target="_blank">
            {project.title}
          </a>
        </h3>

        <p className="text-sm font-light">{project.description}</p>

        <div className="mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 inline-block rounded border border-primary-500 px-2 py-2 text-base capitalize text-primary-500 hover:border-primary-400 hover:bg-primary-400 hover:text-neutral-50"
          >
            <i className="fa-solid fa-brands fa-github fa-lg mr-1"></i>
            view code
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border border-primary-500 px-2 py-2 text-base capitalize text-primary-500 hover:border-primary-400 hover:bg-primary-400 hover:text-neutral-50"
          >
            <i className="fa-solid fa-up-right-from-square fa-lg mr-1"></i>
            view project
          </a>
        </div>
      </div>
    </div>
  );
}
