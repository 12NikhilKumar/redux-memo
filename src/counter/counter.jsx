import React from "react";
import CounterInput from "./counterinput";
const Counter = ()=>{
    const col = ['red','green','blue','yellow','orange','black','white'];
    const [id,setid] = React.useState(0);
    const [data,setData] = React.useState([]);
    const [count,setCount] = React.useState(0);
    const ref = React.useRef(null);
    const colref = React.useRef(null);
    const startCount = ()=>{
        ref.current = setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
    }
    const handleSubmit=({post})=>{
        setData([post])
    }
    const handleVerify=(id)=>{
        setData((prev)=>prev.map((item)=>item.id===id?{...item,verify:!item.verify}:item))
        colref.current = setInterval(()=>{
            setid((prev)=>prev+1)
        },1000)
    }
    React.useEffect(()=>{
        startCount()
    },[])
    return (
        <>
        <h1>{count}</h1>
        <CounterInput onAdd={handleSubmit}/>
        {data?.map((item)=>(
            <div key={item.id}>
            <div style={{width:'100px',height:'100px',background:col[id],margin:'auto'}}></div>
            <h1>{item.title}</h1>
            <h2>{item.body}</h2>
            <h3>{`${item.verify}`}</h3>
            <button onClick={()=>handleVerify(item.id)}>verify</button>
            </div>
        ))}
        </>
    )
};
React.memo(Counter)
export default Counter