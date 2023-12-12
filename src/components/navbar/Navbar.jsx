
import useColor from "../../hooks/useColor";
import './nav.css'

const Navbar = () => {
    const { color, setColor, whiteColor } = useColor()

    const handleChangeColor = (e) => {
        const getColor = e.currentTarget.value
        setColor(getColor);
    }

    const navMenu = <>
        <li style={{ color: whiteColor }}>Color:</li>
        <input className='rounded-full w-7 h-7 border-none' type="color" name="color" defaultValue={color} id="color" onChange={handleChangeColor} />

    </>

    return (
        <div>
            <div className="drawer py-10">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar">
                        <div className="flex-none md:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 text-5xl mx-2 font-semibold">
                            <span className="px-4 py-2 rounded-l-xl" style={{ backgroundColor: color, border: `2px solid ${color}`, color: 'black' }}>Dev </span>
                            <span style={{ border: `2px solid ${color}`, color: whiteColor }} className="px-4 py-2 rounded-r-xl">Jibon</span>
                        </div>

                        <div className="flex-none hidden md:block">
                            <ul className="menu menu-horizontal flex items-center justify-center gap-3">
                                {navMenu}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full z-50" style={{ background: color + '99' }}>
                        {navMenu}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;