import { ADD_TODOS, DEC_COUNT, INC_COUNT } from "./actionTypes.js"

 const inCount = (payload)=>{
    return {
        type:INC_COUNT,
        payload
    }
}

 const decCount = (payload)=>{
    return {
        type:DEC_COUNT,
        payload
    }
}

 const Todo = (payload)=>{
    return {
        type:ADD_TODOS,
        payload
    }
}

export { inCount, decCount,Todo} 
