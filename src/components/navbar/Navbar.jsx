
import useColor from "../../hooks/useColor";


const Navbar = () => {
    const { color, setColor } = useColor()

    const handleChangeColor = (e) => {
        const getColor = e.currentTarget.value
        setColor(getColor);
    }


    console.log(color)

    return (
        <div>
            <input type="color" name="color" id="color" onChange={handleChangeColor} />
        </div>
    );
};

export default Navbar;