import React, { useState } from 'react';
import { uid } from 'uid';
import '../crud-firebase/CURD.css';
import ListState from '../../components/curd-state/List-state';

const CrudState = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({name:'', email:'', phone:''});
  const [isEdit, setIsEdit] = useState({txtId:'', status:''})


  const handleChange = (e) => {
    let data = {...formData};
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataUsers = [...users];
    const tmpUser = { id:uid(), ...formData };
    if(isEdit.status){
      dataUsers.forEach(el => {
        if(el.id === isEdit.txtId){
          el.name = formData.name;
          el.email = formData.email;
          el.phone = formData.phone
        }
      });
    }else{
      dataUsers.push(tmpUser);
    }
    
    setUsers(dataUsers);
    clearData()
  }

  const handleEdit = (e) => {
    setIsEdit({ txtId:e, status:true })
    const find = users.find(val => val.id === e);

    if(!find) return <p>Data tidak ditemukan kocak!</p>

    const {name, email, phone} = find;
    setFormData({name:name, email:email, phone:phone})
  }

  const handleDelete = (e) => {
    let data = [...users]
    let remove = []
    const index = data.map(val => val.id).indexOf(e);
    if(index > -1){
      data.splice(index, 1);
      remove.push(...data)
    }
    setUsers(remove)
  }

  const clearData = () => {
    setFormData({ name:'', email:'', phone:'' })
    setIsEdit({ txtId:'', status:false })
  }

  return (
    <div className="container">
      <h3>Form User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="number" name='phone' placeholder='Number' value={formData.phone} onChange={handleChange}/>
          </div>
        </div>
        <div className="wrap-btn"><button type="submit" className="btn">Submit</button></div>
      </form>
      <hr />
      <ListState users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}
export default CrudState