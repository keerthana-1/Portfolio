import Certifications from './Certification'
import Volunteering from './Volunteering'

export default function Other(){
    return (
       <div className='flex justify-center space-x-32 pt-10 pb-10'>
            <div className="transform transition duration-300 hover:scale-105">
               <Certifications></Certifications>
            </div>
            <div className="transform transition duration-300 hover:scale-105">
               <Volunteering></Volunteering>
            </div>
    </div>
    )
}