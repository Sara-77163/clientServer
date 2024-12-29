import { useEffect, useState } from "react"

const Counter = () => {
    const [count,setCount]=useState(0)
    const [mulcount,Setmulcount]=useState(0)
   const countx2=()=>{
    Setmulcount(count*2)
   }
    useEffect(countx2, [count])
    const add = () => {
        setCount(count+1)
      }
    return (
        <>
    <button onClick={add}>{count}</button>
    <p>{mulcount}</p>
        </>
    )
}
export default Counter