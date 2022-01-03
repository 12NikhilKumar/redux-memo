import TodoInput, { MemoizeTodo } from "./todo.input";
import React from "react";
const Todo = ()=>{
    const [todo,setTodo] = React.useState([]);
    const handleSubmit = ({input})=>{
        setTodo([input])
    }
    const handleUpdate = (id)=>{
       const updateTodo = todo.map((item)=>item.id===id?{...item,status:!item.status}:item)
       setTodo(updateTodo);
    }
    return (
        <>
        <TodoInput onAdd={handleSubmit}/>
        {todo.map((item)=>(
                <div key={item.id} style={{display:'flex',gap:"100px",border : '1px solid black',padding : '1.5rem'}}>
                    <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                    <h2>{item.task}</h2>
                    <h2>{`${item.status}`}</h2>
                    <button onClick={()=>handleUpdate(item.id)}>update</button>
                </div>
        ))}
        </>
    )
}
export default Todo;