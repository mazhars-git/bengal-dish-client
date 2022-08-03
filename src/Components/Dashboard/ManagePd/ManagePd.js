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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePd;