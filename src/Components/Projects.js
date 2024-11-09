import ProjectData from '../data/ProjectData';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="p-6 md:p-10 bg-[#F1F8E9]">
            <div className="flex flex-col md:flex-row md:items-center text-center md:text-left mb-8">
                <div className="text-amber-900 cursor-pointer mb-4 md:mb-0 md:pl-10">
                    <p onClick={() => navigate(-1)}>&lt; Back</p>
                </div>
                <div className="md:pl-10 lg:pl-96">
                    <p className="text-2xl md:text-4xl font-semibold text-amber-900">
                        Diving into my projects...
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ProjectData.map((project, key) => (
                    <ProjectCard project={project} key={key} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
