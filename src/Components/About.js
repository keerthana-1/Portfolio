import { Image } from 'semantic-ui-react';

function About() {
    return (
        <div>
            <div className="flex pt-10 text-amber-900">
                <div className="w-2/3 pl-20 text-justify animate-fadeInUp">
                    <p className="text-6xl font-bold animate-fadeInUp"> 
                        Hey, I’m Keerthana Aravapalli. 
                    </p>
                    <p className="text-3xl font-semibold animate-fadeInUp delay-200"> 
                        A passionate software engineer and AI enthusiast based in Boston, MA. 
                    </p>
                    <p className="text-xl animate-fadeInUp delay-300"> 
                    With a strong foundation in Java, Python, C#, and JavaScript, I build innovative, real-world solutions—from AI-powered systems to full-stack applications. 
                        Specialized in building dynamic, user-focused applications with a seamless blend of front-end and back-end technologies. I’m also well-versed in cloud platforms like AWS and Azure, and continuously explore advancements in machine learning and natural language processing.
                        Whether it’s solving complex problems or delivering user-centric designs, I’m always driven by a desire to make an impact.
                        I thrive in collaborative environments and love learning new technologies.
                        Let’s connect and create something amazing together!

        
                     </p>
                </div>
                <div className="ml-20 animate-fadeInUp delay-300">
                    <Image src="./bitmoji.png" size="medium" className="transform transition duration-700 ease-in-out hover:scale-125" />
                </div>
            </div>
        </div>
    );
}

export default About;
