import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import MyResume from '../../../assets/resume.pdf'
import Line from '../../../components/line/Line';

const TEXTS = ['Web Developer', 'MERN Stack Developer', 'React Developer', 'JS Developer'];

const Hero = ({ color, whiteColor }) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <>
            <div className='mb-40'>
                <div className="hero min-h-full md:min-h-[60vh] mb-20 z-0" style={{ color: whiteColor }}>
                    <div className="hero-content md:gap-20 justify-center max-w-5xl flex-col lg:flex-row">
                        <img src="./jibon.png" style={{ backgroundColor: color }} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">
                                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                            </h1>
                            <p className="py-10" style={{ color: color }} >
                                Hello I&#39;m Jibon Krishna Roy an Enthusiastic MERN stack developer dedicated to crafting seamless web experiences. Proficient in MongoDB, Express.js, React.js, and Node.js, I specialize in building robust, scalable websites. Committed to clean code and innovative problem-solving, I thrive in collaborative environments. Let&#39;s elevate your digital presence together through cutting-edge web development.
                            </p>
                            <a href={MyResume} download={'resume.pdf'} className="btn text-black" style={{ backgroundColor: color }} >Download Resume</a>
                        </div>
                    </div>
                </div>
                <Line></Line>
            </div>
        </>
    );
};

export default Hero;