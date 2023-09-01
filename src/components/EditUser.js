import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserToDB, loadUserList, updateUserToDB, loadUserObj } from '../redux/actions/userAction';

function Edituser(props,{history}) {
  const idname=  props.match.params.id
    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [city,setCity]=useState('')
    const [role,setRole]=useState('')
   
    const dispatch=useDispatch()
 

    useEffect(()=>{
        dispatch(loadUserObj(idname))
    },[])


    const addUser=(e)=>{
        e.preventDefault()
        const userobj={id,name,email,city,role}
        dispatch(updateUserToDB(userobj))
       
       history.push("/userdetails")
         
        
    }
    return (
        
          <div class="card" >
 <div className="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">User Registration</h5>

  <br/>
    <form onSubmit={addUser}>
        UserID:<input type='text' value={id} disabled="disabled" className='form-control'/>
        UserName:<input type='text' value={name} onChange={e => setName(e.target.value)} className='form-control'/>
        Email:<input type='text' value={email} onChange={e => setEmail(e.target.value)} className='form-control'/>
        City:<input type='text' value={city} onChange={e => setCity(e.target.value)} className='form-control'/>
        Role:<select className='form-control' value={role} onChange={e => setRole(e.target.value)}>
            <option value='---'>---</option>
            <option value='admin'>Admin</option>
            <option value='manager'>Manager</option>
            <option value='qa'>QA</option>
        </select>
        <button className='btn btn-success'>Add User</button>
        </form>
   
  </div>
 <div className="card-footer">
    

 </div>
 
        </div>
        
    );
}

export default Edituser;