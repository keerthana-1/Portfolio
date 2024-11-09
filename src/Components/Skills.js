import { Image } from 'semantic-ui-react';
import ProgrammingSkills from '../data/SkillsData';
import { useNavigate } from 'react-router-dom';

export default function Skills() {
    const navigate = useNavigate();

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="p-4 md:p-6 bg-[#F1F8E9]">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="text-amber-900 cursor-pointer mb-4 md:mb-0 md:pl-10 lg:pl-64">
                    <p onClick={() => navigate(-1)}>&lt; Back</p>
                </div>
                <div className="text-center md:pl-10 lg:pl-40">
                    <p className="text-2xl md:text-3xl font-semibold text-amber-900">
                        Check out my areas of expertise...
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-10 md:mt-12">
                {/* Rotated Background Image */}
                <div className="hidden md:block md:p-8 lg:p-14">
                    <Image
                        src="./skillsbg.png"
                        size="small"
                        style={{ transform: 'rotate(-45deg)' }}
                    />
                </div>

                {/* Card Group to Display Skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-6 md:p-10">
                    {ProgrammingSkills.map((programming, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => openLink(programming.link)}
                        >
                            <div className="flex justify-center">
                                {<programming.tag size="50" className="text-amber-800" />}
                            </div>
                            <p className="text-xs pt-4 text-amber-900">{programming.name}</p>
                        </div>
                    ))}
                </div>

                {/* Additional Rotated Background Image */}
                <div className="hidden md:block absolute bottom-0 right-0 m-10">
                    <Image
                        src="./skillsbg.png"
                        size="tiny"
                        style={{ transform: 'rotate(45deg)' }}
                    />
                </div>
            </div>
        </div>
    );
}
