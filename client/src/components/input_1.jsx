import { useEffect, useState } from "react"

const Input_1=()=>
    {
 
        useEffect(()=>{
            alert("welcome")},[])
        const [value,setValue]=useState()
        return(
            <>
             <input onChange={(e)=>{setValue(e.target.value)}}></input>
             <button onClick={()=>{alert(value)}}>view</button>
            </>
           
        )
            
    }
    export default Input_1