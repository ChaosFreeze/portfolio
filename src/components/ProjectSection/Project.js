const Project = ({ project }) => {
  return (
    <div className="mx-6 flex flex-col justify-center gap-8 rounded-lg p-6 shadow-md drop-shadow-xl lg:mx-40 lg:flex-row lg:gap-40 lg:p-20">
      <div className="flex flex-1 flex-col gap-4">
        <h3 className="text-xl font-semibold lg:text-3xl">{project.title}</h3>
        <p>{project.description}</p>
        <div className="flex flex-row gap-4">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              className="rounded-lg border-2 border-solid border-green-600 px-3 py-1 font-bold text-green-600"
            >
              See Live
            </a>
          ) : null}
          <a
            href={project.sourceCode}
            className="border-2 border-transparent py-1 font-bold text-green-600"
          >
            Source Code
          </a>
        </div>
      </div>
      {project.img ? (
        <div className="flex h-60 flex-1 justify-center">
          <img className="rounded-xl" src={project.img} alt="project" />
        </div>
      ) : null}
      {/* <div className="flex h-60 flex-1 justify-center">
        <img className="rounded-xl" src={project.img} alt="project" />
      </div> */}
    </div>
  );
};

export default Project;
