import React, { useEffect, useState } from 'react';

const Effectstate = () => {
    const [first, setfirst] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setfirst((prevFirst) => prevFirst + 1);
        }, 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <p className=' text-black text-center text-4xl mt-10'>UseEffect</p>
            <div className='text-black text-3xl mt-6 text-center'>{first}</div>
        </>
    );
}

export default Effectstate;
