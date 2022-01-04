import React from "react";
import {v4 as uuid} from "uuid"
const CounterInput = ({onAdd})=>{
    const [post,setPost] = React.useState({
        id : uuid(),
        title : "",
        body : "",
        verify : false
    })
    const handleChange = (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    return (
        <>
        <input type="text" name="title" placeholder="enter your title" value={post.title} onChange={(e)=>handleChange(e)}/>
        <input type="text" name="body" placeholder="enter your body" value={post.body} onChange={(e)=>handleChange(e)}/>
        <button onClick={()=>onAdd({post})}>add</button>
        </>
    )
}
export default CounterInput