// import Project from "./Project";
import projectList from "./projectList";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <section>
      <div className="flex justify-center">
        <h2 className="py-2 pb-8 text-3xl font-semibold text-black lg:mb-6 lg:text-6xl pt-8">
          Projects
        </h2>
      </div>
      {/* <div className="flex flex-col gap-8 lg:gap-20">
        {projectList.map(project => <Project project={project} key={project.title} />)}
      </div> */}
      <div className="grid grid-cols-1 mx-6 gap-12 lg:grid-cols-2">
        {projectList.map(project => <ProjectGrid project={project} key={project.title} />)}
      </div>
    </section>
  );
};

export default Projects;
