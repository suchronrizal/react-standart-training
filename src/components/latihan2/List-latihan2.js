import React from 'react'

const ListLatihan2 = () => { 
    return (
      <div className="content-list">
        <h3>List User</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className='btn-act'>
                <a href="">Edit</a>
                <a href="">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
 }

 export default ListLatihan2;