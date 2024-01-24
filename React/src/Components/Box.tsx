// type PropType={
//     heading:string, 
//     count:number
// } 
type TypeOfVlaue= string | number

const Box = <T extends TypeOfVlaue>({
    label, 
    value,
    onchange
}:{
    label:string, 
    value:T, 
    onchange: React.Dispatch<React.SetStateAction<T>>
}) => {
  return ( 
    <> 
    <form > 
        <label >{label}</label> 
        <input type="text" value={value}  onChange={(e)=>onchange(e.target.value as T)}/> 
        <button  onClick={()=>alert(value)}>click</button> 
    </form>  
    {
        console.log(value)
    }
   
    {/* <div>Box</div> 
    <h2>{heading}</h2> 
    <p>{count}</p> */}
    </>
  )
}

export default Box;