import Heading from "../../../components/heading/Heading";
import Line from "../../../components/line/Line";

const Experience = () => {
    return (
        <section className="container py-12 text-center mx-auto">
            <Heading subject={'Experience'}></Heading>

            <div className="mb-32">
                <div className="mb-8">
                    <h3 className="text-xl font-bold">Software Engineer</h3>
                    <p className="text-gray-700">Company Name, City, State | Start Date - End Date</p>
                    <ul className="pl-8">
                        <li>Responsibility or accomplishment #1.</li>
                        <li>Responsibility or accomplishment #2.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-bold">Web Developer Intern</h3>
                    <p className="text-gray-700">Internship Company, City, State | Start Date - End Date</p>
                    <ul className="pl-8">
                        <li>Worked on a specific project or task.</li>
                        <li>Collaborated with team members to achieve goals.</li>
                    </ul>
                </div>
            </div>
            <Line></Line>
        </section>
    );
};

export default Experience;
