import React from 'react'

const ListState = ({users, onEdit, onDelete}) => {

  return(
    <div className="content-list">
      <h3>User List</h3>
      
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
          {users.length > 0 && users.map((val) =>
          <tr key={val.id}>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.phone}</td>
            <td className='btn-act'>
              <a href="#" onClick={()=>onEdit(val.id)}>Edit</a>
              <a href="#" onClick={()=>onDelete(val.id)}>Delete</a>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListState