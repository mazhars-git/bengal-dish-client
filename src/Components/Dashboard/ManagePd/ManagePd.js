import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { swal } from 'sweetalert';
import '../../Css/Pagination.css';

const ManagePd = () => {
    const [itemsData, setItemsData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);


    useEffect(() => {
        fetch(`http://localhost:5000/items?page=${page}&size${pageSize}`)
        .then(res => res.json())
        .then(data => setItemsData(data))
    }, []);


    useEffect(() =>{
        fetch('http://localhost:5000/itemCount')
        .then(res => res.json())
        .then(data => {
            const count = data.countItem;
            const pages = Math.ceil(count/6);
            setPageCount(pages);
        })
    }, [])

    const handleDelete= id => {
        const proceed = window.confirm("Are you sure? You want to delete this??")       
        if(proceed){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = itemsData.filter(item => item._id !== id);
                setItemsData(remaining);
            })
        }
    };

    return (
        <section className="dashboard">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h2 style={{color: '#fff', fontWeight: 'bold'}}>Admin Area</h2>

                       <div className="data-table">
                            <table class="table table-light">
                                <thead>
                                    <tr>
                                    <th scope="col">Sl No</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Item Price</th>
                                    <th scope="col">Action Btn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        itemsData.map((item, index) => 
                                        <tr key={item._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.item}</td>
                                            <td>{item.price}</td>
                                            <td onClick={() => handleDelete(item._id)}>
                                                <DeleteRoundedIcon />
                                            </td>
                                        </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                       </div>
                    
            {/* -------------- -------Pagination Added----------------*/}

                        <div className="pagination">
                            {
                                [...Array(pageCount).keys()]
                                .map(number => 
                                <button
                                    className={page === number ? 'selected' : ''}
                                    onClick={() => setPage(number)}
                                >
                                    {number + 1}
                                </button>)                            
                            }

                            <select onChange={e => setPageSize(e.target.value)}>
                                <option value="5">5</option>
                                <option value="5" selected>15</option>
                                <option value="5">20</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManagePd;