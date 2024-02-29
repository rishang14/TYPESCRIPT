 import { useState } from "react";
import Box from "./Components/Box";  
import DetailedUsestate from "./Components/detailedUsestate";
import Counters from "./Components/counters";
import Todo from "./Components/Todo";

 const  App=()=>{ 
 const [val,setval] =useState<string>("")
  return ( 
    <>
    <div> 
      hello
      <Box label={"Search"} value={val} onchange={setval}/>  
      <DetailedUsestate/> 
      <Counters/> 
      <Todo/>
      
    </div>
       
    </>
  )
}

export default App
