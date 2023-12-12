import useColor from "../../hooks/useColor";
import Hero from "./hero/Hero";


const Home = () => {
    const { color, whiteColor } = useColor()
    return (
        <>
            <section>
                <Hero color={color} whiteColor={whiteColor}></Hero>
            </section>
        </>
    );
};

export default Home;