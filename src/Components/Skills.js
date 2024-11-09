import { Image } from 'semantic-ui-react';
import ProgrammingSkills from '../data/SkillsData';
import { useNavigate } from 'react-router-dom'

export default function Skills() {

  const navigate=useNavigate();

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='p-3 bg-[#F1F8E9]'>


      <div className='flex'>

        <div className='text-amber-900 pl-64 mt-10 cursor-pointer' >
            <p onClick={()=>navigate(-1)}>&lt;Back</p>
        </div>

        <div className='pt-5 pl-80'>
          <p className='text-3xl text-amber-900 font-semibold text-center'>Check out my areas of expertise...</p>
        </div>
      </div>

      <div className='flex m-10 '>
      {/* Rotated Background Image */}
      <div className="p-14" >
        <div>
            <Image src="./skillsbg.png" size="small" style={{ transform: 'rotate(-45deg)' }}></Image>
          </div>  
      </div>

      {/* Card Group to Display Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 p-14 ">
        {ProgrammingSkills.map((programming, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-3 text-center cursor-pointer hover:scale-110" onClick={() => openLink(programming.link)}>
            <div className='pl-6'>
            {

              < programming.tag size='50' className=' text-amber-800'/>
              
            }
            </div>
            <p className='text-xs pt-5'>{programming.name}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 mr-12">
        <div>
            <Image src="./skillsbg.png" size="tiny" style={{ transform: 'rotate(45deg)' }}></Image>
              </div>  
      </div>
      </div>
    </div>
  );
}
