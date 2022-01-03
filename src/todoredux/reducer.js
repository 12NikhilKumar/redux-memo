import { actionConstants } from "./action";

const initState = {
    todo: [
        {
        title: 'Nikhil',
        task : 'coding',
        description: 'masaiSchool'
        }
    ]
}
function reducer(state=initState,action){
    switch(action.type){
        case actionConstants.ADD_TODO : {
            return{
                ...state,
                todo : [...state.todo, action.payload]
            }
        }
        case actionConstants.EDIT_TODO : {
            return{
                ...state,
                todo : [...state.todo, action.payload]
            }
        }
        case actionConstants.DELETE_TODO : {
            return{
                ...state,
                todo : [...state.todo, action.payload]
            }
        }
    }
}
export default reducer