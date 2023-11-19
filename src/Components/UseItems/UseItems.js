import { useState, useEffect } from 'react';

const UseItems = () =>{

const [itemsData, setItemsData] = useState([]);

// console.log(itemsData);

    useEffect(() => {
        fetch('https://dish-server-8cm2.onrender.com/mealItems')
        .then(res => res.json())
        .then(data => setItemsData(data))
    }, []);

    return [itemsData, setItemsData]
}

export default UseItems;