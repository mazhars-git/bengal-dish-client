import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "../../Css/HookForm.css";

const AddAdmin = () => {

  const handleAddAdmin = (e) =>{
    const adminName = e.target.name.value;
    const adminEmail = e.target.email.value;
    const adminCategory = e.target.category.value;

    const newAdminInfo = {adminName, adminEmail, adminCategory}
    console.log(newAdminInfo);
  
    // e.preventDefault();
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
              <form className="row g-3 pt-3" onSubmit={handleAddAdmin}>
                <div className="col-md-6">
                    <input type="text" className="form-control" id="name" name="name" placeholder='Admin Name' required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" id="email" name="email" placeholder='Email' required />
                  </div>
                  <div className="col-md-6">
                      <select className="form-control mt-4" id="category" name="category">
                          <option selected="true" disabled="disabled">Select Category</option>
                          <option>Admin</option>
                          <option>Moderator</option>
                          <option>Editor</option>
                      </select>
                  </div>

                  <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-brand">Add New Admin</button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAdmin;
