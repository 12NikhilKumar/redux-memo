import React from "react";
import {v4 as uuid} from "uuid";
const delay = (time)=>{
    const start = Date.now();
    while(Date.now()-start<time){
        continue;
    }
    return start;
};
const areEqual = (prev,next) =>{
    if(prev.status === next.status){
        return true;
    }
    return false;
}
const TodoInput = ({onAdd})=>{
    const time = delay(200);
    const [input,setInput] = React.useState({
        id:uuid(),
        name : "",
        task : "",
        description : "",
        status : false
    })
    const handleChange = (e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <input type="text" name="name" placeholder="enter your name" value={input.name} onChange={(e)=>handleChange(e)} />
            <input type="text" name="task" placeholder="enter your task" value={input.task} onChange={(e)=>handleChange(e)} />
            <input type="text" name="description" placeholder="enter your description" value={input.description} onChange={(e)=>handleChange(e)} />
            <button onClick={()=>onAdd({input})}>Submit</button>
        </div>
    )
}
export const MemoizeTodo = React.memo(TodoInput,areEqual)
export default TodoInput