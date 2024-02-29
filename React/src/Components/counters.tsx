import { useState } from "react"


const Counters = () => { 
    const [count,setCount]=useState<number>(0)
  return (
    <>
    <div>{count}</div> 
    <button onClick={()=>setCount((preveCount)=> preveCount +1)}>click me</button>
    </>
  )
}

export default Counters