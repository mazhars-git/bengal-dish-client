import { useState, useEffect } from 'react';

const UseItems = () =>{

const [itemsData, setItemsData] = useState([]);

// console.log(itemsData);

    useEffect(() => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => setItemsData(data))
    }, []);

    return [itemsData, setItemsData]
}

export default UseItems;