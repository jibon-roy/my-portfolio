import useColor from "../../hooks/useColor";


const Heading = ({ name, subject, children }) => {
    const { color, whiteColor } = useColor()
    return (

        <div className="flex flex-col text-center w-full mb-10 mt-20">
            <h2 className="text-2xl  tracking-widest font-semibold title-font mb-1">
                {name}
            </h2>
            <h1 style={{ color: whiteColor }}
                className="text-5xl mb-10 font-semibold">{subject}</h1>
            <div className="grid justify-center gap-1 mb-10">
                <div style={{ backgroundColor: color }} className=" -ml-10 h-1 w-20"></div>
                <div style={{ backgroundColor: color }} className=" -mr-10 h-1 w-20"></div>
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed">
                {children}
            </p>
        </div>
    );
};

export default Heading;