import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { addUserToDB } from '../redux/actions/userAction';

function RegisterApp({history}) {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [city,setCity]=useState('')
    const [role,setRole]=useState('')
    const[gender,setGender]=useState('')
    const[favLang,setFavLang]=useState('')
    const dispatch=useDispatch()
    
    const addUser=(e)=>{
        e.preventDefault()
        const userobj={name,email,city,role}
        dispatch(addUserToDB(userobj))
       // dispatch(loadUserList)
      // history.pushState('/userdetails')
    }
    return(
         
          <div class="card" >
 <div className="card-header"></div>
  <div class="card-body">
    <h5 class="card-title">User Registration</h5>
  
  <br/>
    <form onSubmit={addUser}>
        UserName:<input type='text' value={name} onChange={e=>setName(e.target.value)} className='form-control'/>
        Email:<input type='text' value={email} onChange={e=>setEmail(e.target.value)} className='form-control'/>
        City:<input type='text' value={city} onChange={e=>setCity(e.target.value)} className='form-control'/>
        Role:<select className='form-control' value={role} onChange={e=>setRole(e.target.value)}>
            <option value='admin'>Admin</option>
            <option value='manager'>Manager</option>
            <option value='qa'>QA</option>
        </select>
        Gender : <input type='radio' value={gender} onChange={e=>setGender(e.target.value)} className='form-control'></input>
        FavLanguage:<input type="checkbox" value={favLang} onChange={e=>setFavLang(e.target.value)} className='form-control'></input>
        <button className='btn btn-success'>AddUser</button>
    
        
    </form>
  </div>
 <div className="card-footer">
 </div>
        </div>
        
    );
}

export default RegisterApp;