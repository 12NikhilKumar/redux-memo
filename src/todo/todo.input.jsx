import React from "react";
import {v4 as uuid} from "uuid";
const TodoInput = ({onAdd})=>{
    const [input,setInput] = React.useState({
        title : "",
        task : "",
        description : "",
        status : false,
        id:uuid()
    })
    const handleChange = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <input type="text" name="title" placeholder="enter your name" value={input.name} onChange={(e)=>handleChange(e)} />
            <input type="text" name="task" placeholder="enter your task" value={input.task} onChange={(e)=>handleChange(e)} />
            <input type="text" name="description" placeholder="enter your description" value={input.description} onChange={(e)=>handleChange(e)} />
            <button onClick={()=>onAdd({input})}>Submit</button>
        </div>
    )
}
export default TodoInput