import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import "../../Css/HookForm.css";

const AddItem = () => {

  const handleSubmit= (e) =>{
    e.preventDefault();
    const item = e.target.itemName.value;
    const price = e.target.price.value;
    const itemCategory = e.target.category.value;
    const itemDescription = e.target.description.value;
    const image = e.target.itemImage.value;

    const mealItem = {item, price, itemCategory, itemDescription, image};

    console.log(mealItem)
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
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label for="itemName" className="form-label">Item Name</label>
                    <input type="text" className="form-control" id="itemName" required />
                  </div>
                  <div className="col-md-4">
                    <label for="price" className="form-label">Item Price</label>
                    <input type="number" className="form-control" id="price" required />
                  </div>
                  <div className="col-md-4">
                    <label for="category" className="form-label">Category</label>
                      <select className="form-control" id="category" required>
                          <option selected="true" disabled="disabled">Select Category</option>
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                      </select>
                  </div>
                  
                  <div className="col-12">
                    <label for="description" className="form-label mt-2">Description</label>
                    <textarea className="form-control" id="description" rows="3" required></textarea> 
                  </div>

                  <div className="mb-3 col-md-6">
                    <label for="itemImage" className="form-label mt-2">Item Image</label><br/>
                    <input type="file" id="itemImage" required />
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
