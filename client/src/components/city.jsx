const City=()=>{
    const cities=["jerusalem","chadera"]
    return(
        cities.map((item)=>{
            return <h2>{item}</h2>
           })
       
    )
  
}
export default City