import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManagePd = () => {
    return (
        <div className="dashboard">
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
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePd;