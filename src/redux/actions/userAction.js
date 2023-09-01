
import {MAKE_REQUEST, FAIL_REQUEST, GET_USER_LIST, DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ} from "../constants/ActionTypes"
import axios from 'axios'
import {toast } from "react-toastify"


export const makeRequest = () => {
    return {type: MAKE_REQUEST}
}
export const failRequest = (err) => {
    return {type: FAIL_REQUEST, payload: err}
}
export const getUserList = (data) => {
    return {type: GET_USER_LIST, payload: data}
}
export const deleteUserList = () => {
    return {type: DELETE_USER}
}
export const addUser= () => {
    return {type: ADD_USER}
}
export const updateUser= () => {
    return {type: UPDATE_USER}
}
export const getUserObj = (data) => {
    return {type: GET_USER_OBJ, payload: data}
}
export const loadUserList = () => {
    return(dispatch) => {
        dispatch(makeRequest())
        setTimeout(() => {
            axios.get('http://localhost:8000/usersdata').then(res => {
            const userList = res.data
            dispatch(getUserList(userList))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        }, 1000);
        
    }
}

export const loadUserObj = (id) => {
    return(dispatch) => {
        dispatch(makeRequest())
        setTimeout(() => {
            axios.get('http://localhost:8000/usersdata/'+id).then(res => {
            const userList = res.data
            dispatch(getUserObj(userList))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        }, 1000);
        
    }
}
export const deleteUserFromDB = (data) => {
    return(dispatch) => {
        dispatch(makeRequest())
        
            axios.delete('http://localhost:8000/usersdata/'+data).then(res => {
            
            dispatch(deleteUserList())
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        
        
    }
}

export const addUserToDB = (data) => {
    return(dispatch) => {
        dispatch(makeRequest())
        
            axios.post('http://localhost:8000/usersdata/',data).then(res => {
            
            dispatch(addUser())
            toast.success('User Added..!')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        
        
    }

}

export const updateUserToDB = (data,id) => {
    return(dispatch) => {
        dispatch(makeRequest())
        
            axios.put('http://localhost:8000/usersdata/'+id,data).then(res => {
            
            dispatch(updateUser())
            toast.success('User Updated...!')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        
        
    }
    
}