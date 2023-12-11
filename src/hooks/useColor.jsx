import { useContext } from "react";
import { ColorContext } from "../utility/ColorProvider";


const useColor = () => {
    const color = useContext(ColorContext);
    return color
};

export default useColor;