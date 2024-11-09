import Certifications from './Certification';
import Volunteering from './Volunteering';

export default function Other() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-32 pt-10 pb-10">
            <div className="transform transition duration-300 hover:scale-105">
                <Certifications />
            </div>
            <div className="transform transition duration-300 hover:scale-105">
                <Volunteering />
            </div>
        </div>
    );
}
