import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import "../../Css/HookForm.css";

const AddItem = () => {

  const handleAddAdmin = (e) =>{
    const adminName = e.target.name.value;
    const adminEmail = e.target.email.value;
    const adminCategory = e.target.category.value;

    const newAdminInfo = {adminName, adminEmail, adminCategory}
    console.log(newAdminInfo);
    e.preventDefault();
  }
  

  return (
    <section className="dashboard">
      <div className="container py-5">
        <div className="row">
  {/* --------------------------sidebar------------------- */}

          <div className="col-md-3">
              <Sidebar />
          </div>
    
    {/* ----------------------add item form ---------------------------- */}

          <div className="col-md-9 addForm">
              <form className="row g-3" onSubmit={handleAddAdmin}>
                <div className="col-md-6">
                    <label for="name" className="form-label">Admin Name</label>
                    <input type="text" className="form-control" id="name" name="name" />
                  </div>
                  <div className="col-md-6">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" />
                  </div>
                  <div className="col-md-6">
                    <label for="category" className="form-label mt-3">Category</label>
                      <select className="form-control" id="category" name="category">
                          <option selected="true" disabled="disabled">Select Category</option>
                          <option>Admin</option>
                          <option>Moderator</option>
                          <option>Editor</option>
                      </select>
                  </div>

                  <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-brand">Add</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItem;
