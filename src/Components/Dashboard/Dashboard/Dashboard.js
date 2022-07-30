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
                        <h3>Dashboard Area</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;