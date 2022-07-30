import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import "../../Css/HookForm.css";

const AddItem = () => {
  

  return (
    <section className="dashboard">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
              <Sidebar />
          </div>
          
          <div className="col-md-8">
              <form class="row g-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Item Name</label>
                    <input type="text" class="form-control" id="name" />
                  </div>
                  <div class="col-md-6">
                    <label for="price" class="form-label">Item Price</label>
                    <input type="number" class="form-control" id="price" />
                  </div>
                  <div class="col-12">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea> 
                  </div>

                  <div class="mb-3 col-md-6">
                    <label for="formFile" class="form-label">Item Image</label><br/>
                    <input type="file" id="formFile" />
                  </div>

                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItem;
