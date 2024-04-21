import Image from "next/image";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <div className="flex flex-col border p-8">
      <div className="relative flex-1">
        <div className="relative h-72 w-full">
          <Link href={project.liveUrl} target="_blank">
            <Image src={`/images/${project.img}`} alt="project preview" fill />
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-8">
        <h3 className="text-xl font-semibold capitalize hover:text-primary-500">
          <a href={project.liveUrl} target="_blank">
            {project.title}
          </a>
        </h3>

        <p className="font-light">{project.description}</p>

        <div className="mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 inline-block rounded-lg border border-primary-500 px-4 py-2 text-sm uppercase text-primary-500 hover:border-primary-400 hover:bg-primary-400 hover:text-neutral-50"
          >
            <i className="fa-solid fa-brands fa-github fa-xl mr-1"></i>code
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-primary-500 px-4 py-2 text-sm uppercase text-primary-500 hover:border-primary-400 hover:bg-primary-400 hover:text-neutral-50"
          >
            <i className="fa-solid fa-up-right-from-square fa-lg mr-1"></i>
            preview
          </a>
        </div>
      </div>
    </div>
  );
}
