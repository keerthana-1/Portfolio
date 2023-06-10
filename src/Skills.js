import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardImg} from 'reactstrap';
import { SkillData } from './SkillsData';

function Skills(){
      
    const card= SkillData.map((skill) => <Card className="Card" >
              <CardImg className="CardImage" orientation="top" src={skill.imagepath} />
              
              <CardTitle><h3>{skill.name}</h3></CardTitle>
             <CardBody>
              <CardText>
               {skill.description}
             </CardText>
             </CardBody>
             </Card>)

    return (

        <div>
            <h4>Some of my Expertise</h4>
            <div className='CardList'>
                {card}
            </div>

        </div>
    )
}

export default Skills;