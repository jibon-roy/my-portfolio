import Heading from "../../../components/heading/Heading";
import useColor from "../../../hooks/useColor";


const Education = () => {
    const { color, whiteColor } = useColor()
    return (
        <div className="mx-5 justify-between">
            <Heading subject={'My Education & Professional Courses'}></Heading>
            <div className="lg:flex">
                <div className="container mx-auto py-12">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: color }}>Education</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold" style={{ color: whiteColor }}>Diploma in Computer Science & Technology</h3>
                        <p className="text-gray-700 my-2" style={{ color: color + 'bd' }}>Rangpur Polytechnic Institute, Rangpur, Bangladesh</p>
                        <div className="text-xl" style={{ color: whiteColor + 'bd' }}>2020 - Current</div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold" style={{ color: whiteColor }}>High School Certificate</h3>
                        <p className="text-gray-700 my-2" style={{ color: color + 'bd' }}>Annadanagar M/L High School, Rangpur, Bangladesh</p>
                        <div className="text-xl" style={{ color: whiteColor + 'bd' }}>2014 - 2019</div>
                    </div>
                </div>
                <div className="w-full h-2 lg:h-[550px] lg:w-2" style={{ backgroundColor: color }}></div>
                <div className="container mx-auto py-12 lg:ml-10">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: color }}>Professional Courses</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold" style={{ color: whiteColor }}>Complete Web Development Course With Jhankar Mahbub</h3>
                        <p className="text-gray-700 my-2" style={{ color: color + 'bd' }}>Programming Hero</p>
                        <div className="text-xl" style={{ color: whiteColor + 'bd' }}>Duration: 6 Month</div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold" style={{ color: whiteColor }}>Website Design & Development</h3>
                        <p className="text-gray-700 my-2" style={{ color: color + 'bd' }}>SoftLab-IT</p>
                        <div className="text-xl" style={{ color: whiteColor + 'bd' }}>Duration: 4 Month</div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold" style={{ color: whiteColor }}>Website Design & Development</h3>
                        <p className="text-gray-700 my-2" style={{ color: color + 'bd' }}>Dreamland-IT</p>
                        <div className="text-xl" style={{ color: whiteColor + 'bd' }}>Duration: 4 Month</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;