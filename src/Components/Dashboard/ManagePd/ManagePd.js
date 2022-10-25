import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UseItems from './../../UseItems/UseItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ManagePd = () => {
    const [itemsData] = UseItems();
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
                                        itemsData.map((items, index) => 
                                        <tr key={items._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{items.item}</td>
                                            <td>{items.price}</td>
                                            <td><FontAwesomeIcon icon={faFacebook}/></td>
                                        </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                       </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManagePd;