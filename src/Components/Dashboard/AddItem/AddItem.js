import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import "../../Css/HookForm.css";

const AddItem = () => {
  

  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
              <Sidebar />
          </div>
          
          <div className="col-md-8">
              <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Item Name</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Item Price</label>
                    <input type="number" class="form-control" id="inputPassword4" />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" /> 
                  </div>
                  
                  <div class="mb-3 col-md-6">
                    <label for="formFile" class="form-label">Default file input example</label><br/>
                    <input type="file" id="formFile" />
                  </div>

                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddItem;
