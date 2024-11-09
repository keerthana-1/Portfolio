import ProjectData from '../data/ProjectData';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom'

function Projects() {

  const navigate=useNavigate();

  return (

    <div className="p-10 bg-[#F1F8E9]">

      <div className='flex'>

      <div className='text-amber-900 pl-10 cursor-pointer' >
          <p onClick={()=>navigate(-1)}>&lt;Back</p>
      </div>
    <div>
      <p className="text-4xl font-semibold text-amber-900 mb-6 pl-96">Diving into my projects...</p>
    </div>

    </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-6">
       
        {
          ProjectData.map((project,key)=>(
            <ProjectCard project={project} key={key}></ProjectCard>
          ))
        }
    </div>
    
    </div>
  );
}

export default Projects;
