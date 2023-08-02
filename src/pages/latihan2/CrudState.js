import React from 'react';
import ListLatihan2 from '../../components/latihan2/List-latihan2';
import './CRUD.css'

const LatihanCrudState = () => { 
    return (
      <div className='container'>
        <h3>Form User</h3>
        <form action="">
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' placeholder='name' />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="email" name='email' placeholder='email' />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input type="number" name='phone' placeholder='phone' />
            </div>
          </div>
          <div className="wrap-btn">
            <button className="btn">Submit</button>
          </div>
        </form>
        <hr />
        <ListLatihan2 />
      </div> 
    )
 };

 export default LatihanCrudState;