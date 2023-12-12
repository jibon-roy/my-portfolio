
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import useColor from '../../../hooks/useColor';
import Heading from '../../../components/heading/Heading';
import Html from '../../../assets/html.png'
import Css from '../../../assets/css.png'
import Tail from '../../../assets/tailwind.png'
import Exp from '../../../assets/exp.png'
import Mongo from '../../../assets/mongo.png'
import Js from '../../../assets/js.png'
import Node from '../../../assets/node.png'
import React from '../../../assets/react.png'
import Word from '../../../assets/word.png'
import Line from '../../../components/line/Line';

const Skill = ({ name, level, imageSrc }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const { width } = useSpring({
        width: inView ? `${level}%` : '0%',
        from: { width: '0%' },
        config: { duration: 1000 },
        delay: inView ? 100 : 0,
    });
    const { color, whiteColor } = useColor()

    return (
        <div className="mb-5" ref={ref}>
            <div className='flex gap-3 items-center'>
                {imageSrc && <img src={imageSrc} alt={`${name} icon`} className="w-8 h-9" />}
                <p className="font-bold mt-5 mb-3">{name}</p>
            </div>
            <div
                className="h-2 relative rounded-lg" style={{ backgroundColor: whiteColor }}>

                <animated.div
                    className={`h-full relative rounded-lg before:rounded-md before:absolute before:right-0 before:-top-2 before:w-4 before:h-6 before:bg-slate-200 before:border-2 before:border-solid before:border-slate-400`}
                    style={{ width, backgroundColor: color }}

                >
                    <div className="absolute -top-12 -right-3 text-center mt-2">
                        <p className="text-lg text-white font-thin">{level}%</p>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

const Skills = () => {
    const skillsRef = useRef();
    const { whiteColor } = useColor()

    return (
        <>

            <Heading subject={'My Skills'}></Heading>

            <div className="text-2xl mb-32 mt-10 px-5 gap-x-10 font-bold grid md:grid-cols-2" style={{ color: whiteColor }} ref={skillsRef}>


                <Skill name="HTML" level={80} imageSrc={Html} />

                <Skill name="CSS" level={75} imageSrc={Css} />

                <Skill name="Tailwind CSS" level={70} imageSrc={Tail} />

                <Skill name="JavaScript" level={85} imageSrc={Js} />

                <Skill name="React" level={80} imageSrc={React} />

                <Skill name="Express.js" level={75} imageSrc={Exp} />

                <Skill name="Node.js" level={70} imageSrc={Node} />

                <Skill name="WordPress" level={65} imageSrc={Word} />

                <Skill name="MongoDB" level={55} imageSrc={Mongo} />
            </div>
            <Line></Line>
        </>
    );
};

export default Skills;
