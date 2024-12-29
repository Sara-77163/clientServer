import { useState } from "react"

const Counteruntil6_1=()=>{
  const [count,setCount]=useState(0)
  const counter=()=>{
    if(count===6)
        {
            alert(6)
            setCount(0)
        }
        else
        {
            setCount(count+1)
        }
    }
        
    return(
        <>
        <br />
        <button onClick={counter}>counter</button>
        <div>{count}</div>
        </>
    )
}
export default Counteruntil6_1