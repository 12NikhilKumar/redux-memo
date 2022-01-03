export const actionConstants = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    DELETE_TODO: 'DELETE_TODO'
}
export const addTodo = ({data}) => ({
    type: actionConstants.ADD_TODO,
    payload: {
        data
    }
})
export const editTodo = (id) => ({
    type: actionConstants.EDIT_TODO,
    payload: {
        id: id
    }
})
export const deleteTodo = (id) => ({
    type: actionConstants.DELETE_TODO,
    payload: {
        id: id
    }
})