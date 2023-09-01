import {createSlice} from '@reduxjs/toolkit'

export const counterSlice=createSlice({
    name:'counterapp',
    initialState:{
        counter:0,
        auth:false
    },
    reducers:{
        increment:(state) =>{
            state.counter+=1
        },
        decrement:(state)=>{
            state.counter-=1
        },
        login:(state)=>{
            state.auth= true
        },
        logout:(state)=>{
            state.auth=false
        }
    }
})

export const {increment , decrement,login ,logout}=counterSlice.actions
export default counterSlice.reducer