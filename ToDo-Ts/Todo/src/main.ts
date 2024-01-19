import './style.css' 

 
interface Todo{
  title:string, 
  isCompleted:boolean, 
  readonly id:string
} 
 
const TodoArray:Array<Todo>=[]; 
 

const  todoContainer= document.querySelector(".todos") as HTMLDivElement 
const todoinput=document.getElementById("todoInput") as HTMLInputElement
const form=document.getElementById("myform") as HTMLFormElement 

  

 
 form.onsubmit= (e:SubmitEvent)=>{ 
  e.preventDefault();  

    const todo:Todo={
      title:todoinput.value, 
      isCompleted:false, 
      id:String(Math.random()* 1000)  
    } 
    TodoArray.push(todo)  
    todoinput.value= ""
    console.log(TodoArray) 
    renderTodo(TodoArray) 



 }  
 const generateTodoItem=(title:string,isCompleted:boolean,id:string)=>{ 
   const todo=document.createElement("div")
   
  // creating  checkbox 
  const checkbox = document.createElement("input") 
  checkbox.setAttribute("type","checkbox") 
  checkbox.checked=isCompleted 
    
  //  creating p for title 
   const para:HTMLParagraphElement=document.createElement("p")   
   para.innerText=title
    
  //  creating delete button 
  const button:HTMLButtonElement=document.createElement("button")  
  button.innerText="x" 
  button.onclick=()=>{
    deletetodo(id)
  }

  //   appending all the item  

   todo.append(checkbox,para,button) 
   todoContainer.append(todo)

 }  
 const deletetodo=(id:string)=>{  

  const idx= TodoArray.findIndex(item => item.id === id) 
  TodoArray.splice(idx,1)
  renderTodo(TodoArray)
 }
  

 const renderTodo=(TodoArray:Todo[])=>{    

  todoContainer.innerText=""
   TodoArray.map(item =>{
    generateTodoItem(item.title,item.isCompleted,item.id)
      
   })


 } 
 