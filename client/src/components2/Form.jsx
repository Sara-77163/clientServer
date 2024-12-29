import { useContext, useEffect, useRef, useState } from "react"

const Form=()=>
    { 

        const [username,setUsername]=useState('')
        const name=useRef("")
       
  
        return(
            <div>
                <label>name</label>
                <input  ref={name}  onChange={()=>{setUsername(name.current.value)}} ></input>
                <div>{username}</div>
                
                <button onClick={()=>{setUsername(`hi ${username}`)
                name.current.value=''
            }}>save</button>
                
            </div>
        )

    }
    export default Form