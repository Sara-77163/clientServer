const Viewstring_1=()=>{
    const saristr="sari"
    const estistr="esti"
    const alert1=()=>
        {
          alert(estistr)
        }
        const alert2=()=>
            {
              alert(saristr)
            }
    return(
        <>
        <br/>
        <button onClick={alert1}>esti</button>
        <button onClick={alert2}>sari</button>
        </>
    )
}
export default Viewstring_1