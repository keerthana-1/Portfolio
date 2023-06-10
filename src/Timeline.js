import React from 'react';
import {TimelineData} from './TimelineData';

function Timeline(){


    const TimelineItem= TimelineData.map((data) => <div className="timeline-item">
    <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
            {data.category.tag}
        </span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        <span className="circle" />
    </div>
    </div>)


    return (

        <div>
        <h4>Timeline</h4>
        <div className='timeline-container'>
            {TimelineItem}
        </div>

    </div>
       
    )
}

export default Timeline;