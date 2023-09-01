
import React, { useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { loadUserList, deleteUserFromDB } from '../redux/actions/userAction';
import { NavLink } from 'react-router-dom';
import {toast} from 'react-toastify'

 function UserDetails(props) {

    const data=useSelector(state => state.usr.userList)
    const dbt=useSelector(state => state.usr.loading)
    const dispatch=useDispatch()

    useEffect(()=>{
     dispatch(loadUserList())
    },[])
    console.log(data);
    
    const deleteUser=(id)=>{
        if(window.confirm('are you sure to delete...?')){
            dispatch(deleteUserFromDB(id))
            dispatch(loadUserList())
            toast.success('user removed!')
            
        }
 
}
return (
dbt ? <div><h2>Loading....</h2></div>:

    <div className="card">
        <div className="card-header">
        <NavLink to="/register" className="btn btn-success">Register[+]</NavLink>
        </div>
        <h4>User Details</h4>
      
        <div className="card-body">
        <table className="table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>City</td>
                    <td>Role</td>
                    <td>Action</td>

                </tr>
            </thead>
            <tbody>
                {
                    data.map(item =>
                        
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.city}</td>
                            <td>{item.role}</td>
                            <td>   <NavLink to={"/edit/"+item.id} className="btn btn-success">Edit</NavLink> |
                            <button onClick={()=> {deleteUser(item.id)}} className="btn btn-danger">Delete</button></td> 
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
    </div>
);
}

export default UserDetails;