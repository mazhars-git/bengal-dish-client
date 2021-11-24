import React, { useEffect, useState } from 'react';
import break_fast from '../../FakeData/breakfast.json';
import BreakFastData from '../BreakFast/BreakFastData';

const BreakFast = () => {
    const [breakFast, setBreakFast] = useState([]);

    useEffect(() => {
       setBreakFast(break_fast);
    }, [])

    return (
        <section>
            <h1>Breakfast Area</h1>
            {
                breakFast.map(data => <BreakFastData data={data}></BreakFastData>)
            }
        </section>
    );
};

export default BreakFast;