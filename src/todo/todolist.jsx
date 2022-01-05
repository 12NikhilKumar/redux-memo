import TodoInput from "./todo.input";
import {addTodoRequest,addTodo,editTodo} from '../todoredux/action' 
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Todo = ()=>{
    const dispatch = useDispatch();
    const [todo,setTodo] = React.useState([]);
    const handleSubmit = ({input})=>{
        const request = addTodoRequest();
        dispatch(request)
        setTodo([input])
        console.log(input)
        const action = addTodo(input);
        dispatch(action)
    }
    const handleUpdate = (id)=>{
       const action = editTodo(id);
       dispatch(action)
    }
    const data = useSelector((state)=>state.todo)
    const isLoading = useSelector((state)=>state.isLoading)
    console.log(data)
    return (
        <>
        <TodoInput onAdd={handleSubmit}/>
        {isLoading?(<h1>loding</h1>):(data?.map((item)=>(
                <div key={item.id} style={{display:'flex',gap:"100px",border : '1px solid black',padding : '1.5rem'}}>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <h2>{item.task}</h2>
                    <h2>{`${item.status}`}</h2>
                    <button onClick={()=>handleUpdate(item.id)}>update</button>
                </div>
        )))}
        </>
    )
}
export default Todo;