import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import "../../Css/HookForm.css";

const AddItem = () => {
  

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
              <form className="row g-3">
                <div className="col-md-6">
                    <label for="name" className="form-label">Admin Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-6">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-md-6">
                    <label for="category" className="form-label mt-3">Category</label>
                      <select className="form-control" id="category">
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
