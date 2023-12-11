import { createContext, useState } from "react";

export const ColorContext = createContext()


const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('#ff22ff');

    localStorage.setItem('color', color)



    const colorData = { setColor, color }

    return (
        <ColorContext.Provider value={colorData} >
            {children}
        </ColorContext.Provider >
    )
};

export default ColorProvider;