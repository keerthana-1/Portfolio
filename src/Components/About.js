import { Image } from 'semantic-ui-react';

function About() {
    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 text-amber-900">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full md:w-2/3 text-justify animate-fadeInUp">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeInUp"> 
                        Hey, I’m Keerthana Aravapalli. 
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold animate-fadeInUp delay-200"> 
                        A passionate software engineer and AI enthusiast based in Boston, MA. 
                    </p>
                    <p className="text-lg md:text-xl lg:text-xl animate-fadeInUp delay-300"> 
                        With a strong foundation in Java, Python, C#, and JavaScript, I build innovative, real-world solutions—from AI-powered systems to full-stack applications. 
                        Specialized in building dynamic, user-focused applications with a seamless blend of front-end and back-end technologies. I’m also well-versed in cloud platforms like AWS and Azure, and continuously explore advancements in machine learning and natural language processing.
                        Whether it’s solving complex problems or delivering user-centric designs, I’m always driven by a desire to make an impact.
                        I thrive in collaborative environments and love learning new technologies.
                        Let’s connect and create something amazing together!
                    </p>
                </div>
                <div className="w-full md:w-auto mt-10 md:mt-0 md:ml-10 lg:ml-20 animate-fadeInUp delay-300">
                    <Image 
                        src="./bitmoji.png" 
                        size="medium" 
                        className="transform transition duration-700 ease-in-out hover:scale-125 lg:hover:scale-150"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
