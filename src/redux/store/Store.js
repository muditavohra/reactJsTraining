

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {userReducer} from '../reducers/userReducer'

const rootReducer= combineReducers(
    {
        usr:userReducer
    })
    const store= configureStore({reducer:rootReducer,middleware:[thunk,logger]})
    export default store