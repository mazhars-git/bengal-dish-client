import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import "../../Css/HookForm.css";

const AddItem = () => {

  const handleSubmit= (e) =>{
    e.preventDefault();
    const item = e.target.item.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const image = e.target.image.value;

    const mealItem = {item, price, category, description, image};

    console.log(mealItem)

    //send data to server
    
    fetch('', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(mealItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log('success', data)
      alert('item added successfully!!')
      e.target.removeEventListener();
    })
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
                    <input type="text" className="form-control" id="itemName" name="item" required />
                  </div>
                  <div className="col-md-4">
                    <label for="price" className="form-label">Item Price</label>
                    <input type="number" className="form-control" id="price" name="price" required />
                  </div>
                  <div className="col-md-4">
                    <label for="category" className="form-label">Category</label>
                      <select className="form-control" id="category" name="category" required>
                          <option selected="true" disabled="disabled">Select Category</option>
                          <option>Breakfast</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                      </select>
                  </div>
                  
                  <div className="col-12">
                    <label for="description" className="form-label mt-2">Description</label>
                    <textarea className="form-control" id="description" rows="3" name="description" required></textarea> 
                  </div>

                  <div className="mb-3 col-md-6">
                    <label for="itemImage" className="form-label mt-2">Item Image</label><br/>
                    <input type="file" id="itemImage" name="image" required />
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
