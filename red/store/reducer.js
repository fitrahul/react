import { ADD_TODOS, DEC_COUNT, INC_COUNT } from "./actionTypes.js";

export const reducer = (state, {type,payload}) => {

    switch(type){
        case INC_COUNT:{
           return {
               ...state,  /// maintain the previous state
             count: state.count + payload
           }
        };
        case DEC_COUNT : {
             return {
                 ...state, /// maintain the previous state
                 count: state.count - payload 
             }
        }
        case ADD_TODOS:{
            return {
                ...state, /// maintain the previous state
              todos:[...state.todos,payload]
            }
        }
        default :{
            return state
        }
    }
 };