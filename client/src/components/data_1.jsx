import { useEffect, useState } from "react"



const C1=()=>{
    const fn="sari"
    const ls="hutzler"
    const age=20
    const city="jerusalem"
    const[flag,setFlag]=useState(false)
    return(
        <>
        <button onClick={()=>setFlag(!flag)}>view data</button>
        {flag===true?<div style={{backgroundColor:"pink"}}>
            <h1>שם פרטי:{fn}</h1>
            <h1>שם משפחה:{ls}</h1>
            <h1>גיל:{age}</h1>
            <h1>עיר:{city}</h1>
             </div>:<></>} 
        
        </>
        

    )
    
}
export default C1