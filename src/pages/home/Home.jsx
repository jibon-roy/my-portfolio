import useColor from "../../hooks/useColor";
import Education from "./education/Education";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";


const Home = () => {
    const { color, whiteColor } = useColor()
    return (
        <>
            <section>
                <Hero color={color} whiteColor={whiteColor}></Hero>
            </section>
            <section>
                <Skills ></Skills>
            </section>
            <section>
                <Projects></Projects>
            </section>
            <section>
                <Education></Education>
            </section>
        </>
    );
};

export default Home;