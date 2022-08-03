import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../../Css/Dashboard.css';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h2 style={{color: '#fff', fontWeight: 'bold'}}>Dashboard Area</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;