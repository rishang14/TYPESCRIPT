import React, { useState } from "react"; 
import Todolist from "./Todolist";


const Todo:React.FC=()=>{ 
    const [todos,setTodos]=useState <string[]>([]); 
    const [input,SetInput]=useState<string>("") 
     
     const addTodo=()=>{
        if(input.trim() !== "") 
        {
            setTodos([...todos,input]) 
            SetInput('')
        }
     }

    return(
        <> 
         <h1>todo list </h1> 
          
          <input type="text" value={input} onChange={(e)=>SetInput(e.target.value)} /> 
          <button  onClick={addTodo}>Add Todo</button> 
           
           <div>
            {todos.map((todo,index)=>{
                return(
                    <Todolist key={index} text={todo}/>
                )
            })}
           </div>
        </>
    )
} 
 
 
export default Todo;