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
                <div className="col-md-4">
                    <label for="name" className="form-label">Item Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="col-md-4">
                    <label for="price" className="form-label">Item Price</label>
                    <input type="number" className="form-control" id="price" />
                  </div>
                  <div className="col-md-4">
                    <label for="category" className="form-label">Category</label>
                      <select className="form-control" id="category">
                          <option selected="true" disabled="disabled">Select Category</option>
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                      </select>
                  </div>
                  
                  <div className="col-12">
                    <label for="description" className="form-label mt-2">Description</label>
                    <textarea className="form-control" id="description" rows="3"></textarea> 
                  </div>

                  <div className="mb-3 col-md-6">
                    <label for="formFile" className="form-label mt-2">Item Image</label><br/>
                    <input type="file" id="formFile" />
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
