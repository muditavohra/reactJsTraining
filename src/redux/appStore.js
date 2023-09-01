import {configureStore} from '@reduxjs/toolkit';
import cr from './counterSlice';

export default configureStore({

    reducer:{
        count:cr
    }
})