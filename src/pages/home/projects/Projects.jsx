
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Heading from '../../../components/heading/Heading';
import Project1 from '../../../assets/project-1.jpg'
import Project2 from '../../../assets/project-2.jpg'
import Project3 from '../../../assets/project-3.jpg'
import useColor from '../../../hooks/useColor';
import { useState } from 'react';
import Line from '../../../components/line/Line';

const ProjectCard = ({ title, description, imageSrc, gitLink, liveLink }) => {
    const [hover, setHover] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const cardAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        reset: inView,
        config: { tension: 300, friction: 10 },

    });
    const { color } = useColor()
    return (
        <animated.div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`relative shadow-md `} style={{ ...cardAnimation, willChange: 'opacity, transform', backgroundColor: hover ? color : color + 'aa', transition: '0.5s', height: '400px' }} ref={ref}>
            <div>
                <img src={imageSrc} alt={`${title} Project`} className={hover ? `h-0 w-0 opacity-0 transition-all` : `w-full h-[400px] object-fill transition-all`} />
            </div>
            <div style={{ display: hover ? 'block' : 'none', color: hover ? 'black' : color }} className='mx-4 absolute top-10'>
                <h3 className="text-3xl font-bold mb-2">{title}</h3>
                <p className="mb-5" style={{ display: hover ? 'block' : 'none', color: hover ? 'black' : color }}>{description}</p>
                <div>
                    <span className='font-semibold mr-2'>Live Link: </span>
                    <a className='text-blue-800' href={liveLink} rel="noreferrer" target='_blank'>{liveLink}</a>
                </div>
                <div>
                    <span className='font-semibold mr-2'>Github Link: </span>
                    <a className='text-blue-800' href={gitLink} rel="noreferrer" target='_blank'>{gitLink}</a>
                </div>

            </div>
        </animated.div>
    );
};

const Projects = () => {


    return (
        <div className="mx-auto py-12">
            <Heading subject={'My Projects'}></Heading>

            <div className="grid md:grid-cols-2 mx-5 gap-5 mb-20">

                <ProjectCard
                    title="Survey Wave"
                    description={`
                    User can easily filter survey by title, category, by vote.
To be a pro user and to get advanced facility an user can purchase premium package.
Without login no user can participate in any survey.
If any user wants to comment he/she will have to be a premium user and regular may like, report in any survey.
                    `}

                    gitLink={'https://github.com/jibon-roy/survey-wave-client'}
                    liveLink={'https://survey-wave-site.web.app/'}
                    imageSrc={Project1}
                />


                <ProjectCard
                    title="Job Hunter"
                    description={
                        `User can register and login on this Job site.
                        Also can Add Jobs.
                        Can update or delete jobs.
                        Can bid a job from job details.
                        Accept and reject job from bid request.
                    ` }

                    gitLink={'https://github.com/jibon-roy/survey-wave-client'}
                    liveLink={'https://survey-wave-site.web.app/'}
                    imageSrc={Project2}
                />


                <ProjectCard
                    title="Socio Events"
                    description={`
                    This project is designed for social event management ‍service.
Users can know about the services provided and can purchase them.
Users can create and update profile data.
Here are some private routes that users cannot access unless they are logged in.
                    `}
                    gitLink={'https://github.com/jibon-roy/socio-event'}
                    liveLink={'https://socio-events.web.app/'}
                    imageSrc={Project3}
                />
            </div>
            <Line></Line>
        </div>
    );
};

export default Projects;
