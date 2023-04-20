import Image from "next/image";

export default function Project(props) {
  return (
    <div className="flex flex-col border border-solid border-neutral-400">
      <div className="relative flex-1">
        <div className="relative h-72 w-full">
          <Image
            src={`/images/${props.project.img}`}
            alt="project preview"
            fill
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-2xl font-bold capitalize">
          {props.project.title}
        </h3>
        <p className="">{props.project.description}</p>

        <div className="mt-auto">
          <a
            href={props.project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-1/2 text-base decoration-primary-100 decoration-2 underline-offset-8 hover:text-primary-100 hover:underline"
          >
            View project <i class="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-1/2 text-base decoration-primary-100 decoration-2 underline-offset-8 hover:text-primary-100 hover:underline"
          >
            View code <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
