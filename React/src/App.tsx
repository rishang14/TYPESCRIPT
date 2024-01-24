 import { useState } from "react";
import Box from "./Components/Box";  
import DetailedUsestate from "./Components/detailedUsestate";

 const  App=()=>{ 
 const [val,setval] =useState<string>("")
  return ( 
    <>
    <div> 
      hello
      <Box label={"Search"} value={val} onchange={setval}/>  
      <DetailedUsestate/>
      
    </div>
       
    </>
  )
}

export default App
