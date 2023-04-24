import Image from "next/image";

export default function Project(props) {
  return (
    <div className="flex flex-col border border-solid border-neutral-200 dark:border-neutral-700">
      <div className="relative flex-1">
        <div className="relative h-72 w-full">
          <Image
            src={`/images/${props.project.img}`}
            alt="project preview"
            fill
          />
        </div>
      </div>
      {/* Responsive image */}
      {/* <div className="flex-1">
        <Image
          src={`/preview/${props.project.img}`}
          alt="project preview"
          width={475}
          height={348}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div> */}

      <div className="flex flex-1 flex-col bg-neutral-50 p-6 dark:bg-neutral-800">
        <h3 className="text-2xl capitalize">{props.project.title}</h3>
        <p className="">{props.project.description}</p>

        <div className="mt-auto">
          <a
            href={props.project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-1/2 text-base decoration-primary-500 decoration-2 underline-offset-8 hover:text-primary-500 hover:underline"
          >
            View project <i class="fa-solid fa-up-right-from-square"></i>
          </a>
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-1/2 text-base decoration-primary-500 decoration-2 underline-offset-8 hover:text-primary-500 hover:underline"
          >
            View code <i class="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
