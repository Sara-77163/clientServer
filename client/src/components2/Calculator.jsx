const { useRef, useState } = require("react")

const Calculator=()=>{
    const shekel=useRef("")
    const [Dolar,setDolar]=useState(0)
    const calculate=()=>{
        setDolar(Number(shekel.current.value)*3.4)
    }
    return(
     <>
     <label>הכנס ערך</label>
     <input ref={shekel} ></input>
     <button onClick={calculate}>המרה</button>
     <p>{Dolar}</p>


     </>
    )
}
export default Calculator