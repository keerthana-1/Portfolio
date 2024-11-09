import { useNavigate } from 'react-router-dom';
import { TimelineData } from '../data/TimelineData';
import { Icon } from 'semantic-ui-react';

export default function Background() {
    const navigate = useNavigate();

    const TimelineItem = TimelineData.map((data) => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                    <span className="text-xl">&nbsp;{data.category.emoji}</span>
                </span>
                <p>{data.text}</p>
                <time>{data.date}</time>
                <p>{data.tech}</p>
                <span className="circle" />
            </div>
        </div>
    ));

    return (
        <div className="pt-10 bg-[#F1F8E9]">
            <div className="flex flex-col md:flex-row md:items-center text-amber-900">
                <div className="text-amber-900 pl-4 md:pl-16 lg:pl-64 cursor-pointer">
                    <p onClick={() => navigate(-1)}>&lt; Back</p>
                </div>
                <div className="flex items-center text-amber-900 pl-4 md:pl-16 lg:pl-64 mt-4 md:mt-0">
                    <Icon name="graduation cap" size="big" />
                    <p className="text-2xl md:text-3xl font-semibold text-center pl-3">
                        My Academic and Career Milestones
                    </p>
                </div>
            </div>

            <div className="pt-10 pb-10 ml-4 md:ml-16 lg:ml-64">
                <div className="timeline-container">{TimelineItem}</div>
            </div>
        </div>
    );
}
