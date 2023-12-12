import useColor from "../../hooks/useColor";
import ContactMe from "./contact/Contact";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
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
            <section>
                <Experience></Experience>
            </section>
            <section>
                <ContactMe></ContactMe>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </>
    );
};

export default Home;