import { useNavigate } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

export default function Tiles() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between pt-20 pb-28 pl-20 pr-40">
            <div className="image-container" onClick={() => navigate("/background")}>
                <Image src="./education.png" size="medium" />
                <div className="centered-text">Academic Jouney</div>
            </div>

            <div className="image-container" onClick={() => navigate("/projects")}>
                <Image src="./projects.png" size="small" />
                <div className="centered-text">Projects</div>
            </div>

            <div className="image-container" onClick={() => navigate("/skills")}>
                <Image src="./skills.png" size="small" />
                <div className="centered-text">Technical Skills</div>
            </div>
        </div>
    );
}
