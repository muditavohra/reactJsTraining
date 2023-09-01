
import {MAKE_REQUEST, FAIL_REQUEST, GET_USER_LIST, DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ} from "../constants/ActionTypes"

const initialState = {
    loading: true,
    userList: [],
    userobj: {},
    errMsg: ''
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errMsg: action.payload
            }
        case GET_USER_LIST:
            return {
                ...state,
                loading: false,
                errMsg: '',
                userList: action.payload,
                userobj: {}
            }
            case DELETE_USER:
            return {
                ...state,
                loading: false,
                 
            }
            case ADD_USER:
            return {
                ...state,
                loading: false,
                 
            }
            case UPDATE_USER:
                return {
                    ...state,
                    loading: false,
                     
                }
                case GET_USER_OBJ:
                    return {
                        ...state,
                        loading: false,
                        userobj:action.payload
                         
                    }
        default:
            return state
    }
}