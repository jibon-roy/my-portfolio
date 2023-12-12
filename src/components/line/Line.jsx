import useColor from '../../hooks/useColor';

const Line = () => {
    const { color } = useColor()
    return (
        <div className='w-[100vw] absolute left-0 h-1 flex -rotate-3' style={{ backgroundColor: color }}></div>
    );
};

export default Line;