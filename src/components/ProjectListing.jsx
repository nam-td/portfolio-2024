import { Link } from "react-router-dom";
const ProjectCard = (props) => {
  const {imgURL, projectURL} = props;

    return (
    <li className="w-full max-w-[500px] aspect-[4/3] bg-gradient-to-bl from-gray-950/10 to-gray-900/10 shadow-sm shadow-neutral-50/20 rounded-md p-4 md:py-12 md:px-8 hover:shadow-md hover:shadow-neutral-50/40 duration-500 ease-in-out group">
        <Link to={projectURL} className="w-full h-full overflow-hidden flex flex-row justify-center items-center">
            <img src={imgURL} alt="project thumbnail" className="h-full max-w-[500px] object-cover"/>
        </Link>
    </li>
  );
};

const ProjectListing = () => {
  return (
    <div className="w-full max-w-[1280px] min-h-[calc(100vh-80px)] mx-auto flex flex-col justify-center">
      <ul className="w-full p-4 flex flex-col md:flex-row md:flex-wrap gap-6 lg:gap-8 items-center justify-center">
        <ProjectCard imgURL="/preview/serum-desktop-1.png" projectURL="/projects/serum"/>
        <ProjectCard imgURL="/preview/record-label-desktop-1.png" projectURL="/projects/record-label"/>
        <ProjectCard imgURL="/preview/jager-desktop-1.png" projectURL="/projects/jager"/>
        <ProjectCard imgURL="/preview/apexx-desktop-1.png" projectURL="/projects/apexx-studio"/>
      </ul>
    </div>
  );
};

export default ProjectListing;
