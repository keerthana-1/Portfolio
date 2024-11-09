import { FaLinux,FaFigma,FaReact,FaJava,FaPython,FaHtml5,FaGitAlt, FaCss3Alt,FaNode,FaDocker,FaAws ,FaDatabase ,FaJenkins } from 'react-icons/fa';
import { SiApachemaven,SiJunit5,SiPostman ,SiPostgresql,SiJavascript,SiSpring,SiKubernetes,SiJira,SiTypescript,SiSpringsecurity,SiMysql,SiMongodb,SiMicrosoftazure,SiDjango, SiDeepl ,SiRedhatopenshift, SiMicrosoftsqlserver,SiSpringboot,SiThymeleaf, SiScikitlearn } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsBoxes } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";

const ProgrammingSkills=[
    {
        name: 'Java',
        tag: FaJava,
        link:"https://www.java.com/en/"
    },
    {
        name: 'Python',
        tag: FaPython,
        link: "https://www.python.org/"
    },
    {
        name: 'Javascript',
        tag: SiJavascript,
        link: "https://www.javascript.com/"
    },
    {
        name: 'Typescript',
        tag: SiTypescript,
        link: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
    },
    {
        name: 'MySQL',
        tag: SiMysql,
        link: "https://www.mysql.com/"
    }, 
    {
        name: 'MongoDb',
        tag: SiMongodb,
        link: "https://www.mongodb.com/"
    },
    {
        name: 'SQL Server',
        tag: SiMicrosoftsqlserver,
        link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
    },
    {
        name: 'Postgre SQL',
        tag: SiPostgresql,
        link: "https://www.postgresql.org/"
    },
    {
        name: 'HTML',
        tag: FaHtml5,
        link: "https://html.com/"
    },
    {
        name: 'CSS',
        tag: FaCss3Alt,
        link: "https://www.w3.org/Style/CSS/Overview.en.html"
    },
    {
        name: 'React',
        tag: FaReact,
        link: "https://react.dev/"
    },
    {
        name: 'NextJs',
        tag: RiNextjsFill,
        link: "https://nextjs.org/"
    },
    {
        name: 'Thymeleaf',
        tag: SiThymeleaf,
        link: "https://www.thymeleaf.org/"
    },
    {
        name: 'Node.js',
        tag: FaNode,
        link: "https://nodejs.org/en" 
    },
    {
        name: 'Spring',
        tag: SiSpring,
        link: "https://spring.io/"
    },
    {
        name: 'Spring Boot',
        tag: SiSpringboot,
        link: "https://spring.io/projects/spring-boot"
    },
   
    {
        name: 'Spring Security',
        tag: SiSpringsecurity,
        link: "https://spring.io/projects/spring-security"
    },
    {
        name: 'Spring Data JPA',
        tag: FaDatabase ,
        link: "https://spring.io/projects/spring-data-jpa"
    },
    
    {
        name: 'Microservices',
        tag: BsBoxes,
        link: "https://spring.io/microservices"
    },
    {
        name: 'Django',
        tag: SiDjango,
        link: "https://www.djangoproject.com/"
    },
    {
        name: 'Artificial Intelligence',
        tag: GiArtificialIntelligence,
        link: "https://en.wikipedia.org/wiki/Artificial_intelligence"
    }, 
    {
        name: 'Machine Learning',
        tag: SiScikitlearn,
        link: "https://scikit-learn.org/"
    },
    {
        name: 'Deep Learning',
        tag: SiDeepl,
        link: "https://en.wikipedia.org/wiki/Neural_network_(machine_learning)" 
    },
    {
        name: 'AWS',
        tag: FaAws,
        link: "https://aws.amazon.com/"
    },
    {
        name: 'Azure',
        tag: SiMicrosoftazure,
        link: "https://azure.microsoft.com/en-us"
    },
    {
        name: 'Docker',
        tag: FaDocker,
        link: "https://www.docker.com/" 
    }, 
    {
        name: 'Redhat Openshift',
        tag: SiRedhatopenshift,
        link: "https://www.redhat.com/en/technologies/cloud-computing/openshift"
    },
    {
        name: 'Linux',
        tag: FaLinux,
        link: "https://www.linux.org/"
    },
    {
        name: 'Kubernetes',
        tag: SiKubernetes,
        link: "https://kubernetes.io/"
    },
    {
        name: 'Jenkins',
        tag: FaJenkins,
        link: "https://www.jenkins.io/"
    },
    {
        name: 'Git',
        tag: FaGitAlt,
        link: "https://git-scm.com/"
    },
    {
        name: 'JIRA',
        tag: SiJira,
        link: "https://jira.atlassian.com/"
    },
    {
        name: 'JUnit',
        tag: SiJunit5,
        link: "https://junit.org/"
    },
    {
        name: 'Maven',
        tag: SiApachemaven,
        link: "https://maven.apache.org/"
    },
    {
        name: 'Postman',
        tag: SiPostman,
        link: "https://www.postman.com/" 
    },
    {
        name: 'Figma',
        tag: FaFigma,
        link: "https://www.figma.com/"
    },
   
]

export default ProgrammingSkills;