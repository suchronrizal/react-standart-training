/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import "./CURD.css";
import List from '../../components/crud-firebase/List';

const Crud = () =>{
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    address:''
  })

  const getDataUsers = async () =>{
    try{
      const response = await fetch('https://react-training-crud-default-rtdb.asia-southeast1.firebasedatabase.app/users.json');
      const getData = await response.json();
      const dataUsers = []
      for(const key in getData){
        const user = {
          id:key,
          ...getData[key]
        }
        dataUsers.push(user)
      }
      setUsers(dataUsers)
    }catch(error){
      console.error(error)
    }
  }
 
  useEffect(() => {
    getDataUsers();
  },[]);

  const handleChange = (e) => {
    let data = {...formData};
    data[e.target.name] = e.target.value;
    setFormData(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(formData.name==='') return true;
    try{
      await fetch('https://react-training-crud-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', 
        {
          method:'POST', 
          headers:{
            "Content-Type":'application/json',
          }, 
          body:JSON.stringify(formData)
        }
      );
      setLoading(false);
      getDataUsers();
    }catch(error){
      console.error(error)
    }
  }

  const handleEdit = async (id) => {
      const res = await fetch(`https://react-training-crud-default-rtdb.asia-southeast1.firebasedatabase.app/users.json/${id}`, {
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With'
        }
      });
      const data = await res.json();
      console.log('data edit:', data)
  }

  return (
    <div className="container">
      <h3>Form User</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-inline'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='name' name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='email' name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='adress'>Address</label>
            <textarea placeholder='address' name='address' value={formData.address} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className='wrap-btn'>
          <button type='submit' className='btn'>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
      <hr />
      <List users={users} onEdit={handleEdit} />
    </div>
  )
}

export default Crud;