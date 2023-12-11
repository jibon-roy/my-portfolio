import useColor from "../../hooks/useColor";


const Home = () => {
    const { color } = useColor()
    return (
        <div style={{ color: color }} className="text-7xl text-center">
            This is home
        </div>
    );
};

export default Home;