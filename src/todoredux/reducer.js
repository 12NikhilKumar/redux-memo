import { actionConstants } from "./action";

const initState = {
    todo: [],
    isLoading : true
}
function reducer(state=initState,action){
    switch(action.type){
        case actionConstants.ADD_TODO_REQUEST : {
            console.log("ADD_TODO_REQUEST")
            return {
                ...state,
                isLoading : true
            }
        }
        case actionConstants.ADD_TODO : {
            console.log(action.payload)
            return{
                ...state,
                todo : [...state.todo, action.payload.data],
                isLoading : false
            }
        }
        case actionConstants.EDIT_TODO : {
            return{
                ...state,
                todo : state.todo.map((item)=>item.id===action.payload.id?{...item,status:!item.status}:item)
            }
        }
        case actionConstants.DELETE_TODO : {
            return{
                ...state,
                todo : state.todo.filter((item)=>item.id!=action.payload.id)
            }
        }
        default: {
            return state
        }
    }
}
export default reducer