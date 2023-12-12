import { createContext, useState } from "react";

export const ColorContext = createContext()


const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('#28F98C');
    const whiteColor = '#F8F8F8'


    localStorage.setItem('color', color)



    const colorData = { setColor, color, whiteColor }

    return (
        <ColorContext.Provider value={colorData} >
            {children}
        </ColorContext.Provider >
    )
};

export default ColorProvider;