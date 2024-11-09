import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    Image,
} from 'semantic-ui-react'

function ProjectCard({ project }) {
    return (
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border rounded-lg overflow-hidden">
              <Image src={`/projects/${project.image}`} wrapped ui={false} className="max-h-30 w-full object-cover"/>
                <CardContent className="p-4">
                    <CardHeader className="text-lg font-semibold mb-2">
                        <p className=' text-amber-900'>{project.title}</p>
                    </CardHeader>
                    <CardDescription className="mb-4">
                    <p className=' text-amber-900'>{project.description}</p>
                    </CardDescription>
                    <ul className="flex flex-wrap gap-2">
                        {project.skills.map((skill, id) => (
                            <li key={id} className="bg-gray-200 text-amber-900 text-xs font-medium px-2 py-1 rounded">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardContent extra className="p-4">
                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                        <p className="text-amber-900 hover:text-amber-700 font-medium underline">Source Code</p>
                    </a>
                </CardContent>
            </Card>
        
    );
}

export default ProjectCard;
