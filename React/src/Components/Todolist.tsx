import React from "react" 
 
interface TodoProps{
  text:string
}

const Todolist: React.FC<TodoProps> = ({text}) => {
  return (
    <>
     <ul>
      <li>{text}</li>
     </ul>
    </>
  )
}

export default Todolist