import { createElement, useState } from "react"

const Birthday_1=()=>
    {
        const [age,setAge]=useState()
        const [name,setName]=useState()
        return(
            <>
            <br/>
            <input onChange={(e)=>{setAge(e.target.value)}}></input>
            <button onClick={()=>{
           
               age>18?alert(`${name} is over than 18 years old`):alert(`Happy Birthday! you are ${age} years old`)}} >age</button>
               
            <br/>
            {age>18?<h1 style={{color:"pink"}}>{name} is over than 18 years old</h1>:<></>}
            <input onChange={(e)=>{setName(e.target.value)}}></input>
           
            </>
            
        )
    }
    export default Birthday_1