import React from 'react'

const List = ({users, onEdit}) =>{
    return (
        <div className="content-list">
        <h3>List User</h3>
        <table className='table'>
          <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody> 
            {users.map((val) => (
            <tr key={val.id}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.address}</td>
              <td className='btn-act'><a href='#' onClick={() => onEdit(val.id)}>Edit</a> <a href='#'>Delete</a></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    )
}

export default List;