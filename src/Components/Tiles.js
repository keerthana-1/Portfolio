import { useNavigate } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

export default function Tiles() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-10 pt-10 pb-20 px-4 md:px-20 lg:px-40">
            <div className="image-container" onClick={() => navigate("/background")}>
                <Image src="./education.png" size="medium" className="hover:scale-105 transition-transform duration-300" />
                <div className="centered-text">Academic Journey</div>
            </div>

            <div className="image-container" onClick={() => navigate("/projects")}>
                <Image src="./projects.png" size="small" className="hover:scale-105 transition-transform duration-300" />
                <div className="centered-text">Projects</div>
            </div>

            <div className="image-container" onClick={() => navigate("/skills")}>
                <Image src="./skills.png" size="small" className="hover:scale-105 transition-transform duration-300" />
                <div className="centered-text">Technical Skills</div>
            </div>
        </div>
    );
}
