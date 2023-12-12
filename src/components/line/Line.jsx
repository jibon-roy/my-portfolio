import useColor from '../../hooks/useColor';

const Line = () => {
    const { color } = useColor()
    return (
        <div className='w-full h-1 flex -rotate-3' style={{ backgroundColor: color }}></div>
    );
};

export default Line;