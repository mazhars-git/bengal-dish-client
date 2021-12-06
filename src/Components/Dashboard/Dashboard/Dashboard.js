import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h3>Dashboard Area</h3>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;