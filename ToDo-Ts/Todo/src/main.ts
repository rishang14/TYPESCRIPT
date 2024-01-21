import './style.css'


// interface Todo {
//   title: string,
//   isCompleted: boolean,
//   readonly id: string
// }

// const TodoArray: Array<Todo> = [];


// const todoContainer = document.querySelector(".todos") as HTMLDivElement
// const todoinput = document.getElementById("todoInput") as HTMLInputElement
// const form = document.getElementById("myform") as HTMLFormElement




// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();

//   const todo: Todo = {
//     title: todoinput.value,
//     isCompleted: false,
//     id: String(Math.random() * 1000)
//   }
//   TodoArray.push(todo)
//   todoinput.value = ""
//   console.log(TodoArray)
//   renderTodo(TodoArray)



// }
// const generateTodoItem = (value: string, isCompleted: boolean, id: string) => {
//   const todo = document.createElement("div")

//   // creating  checkbox 
//   const checkbox = document.createElement("input")
//   checkbox.setAttribute("type", "checkbox")
//   checkbox.checked = isCompleted

//   //  creating p for title 
//   const para: HTMLParagraphElement = document.createElement("p")
//   para.innerText = value

//   //  creating delete button 
//   const button: HTMLButtonElement = document.createElement("button")
//   button.innerText = "x"
//   button.onclick = () => {
//     deletetodo(id)
//   }

//   //   appending all the item  

//   todo.append(checkbox, para, button)
//   todoContainer.append(todo)

// }
// const deletetodo = (id: string) => {

//   const idx = TodoArray.findIndex(item => item.id === id)
//   TodoArray.splice(idx, 1)
//   renderTodo(TodoArray)
// }


// const renderTodo = (TodoArray:Todo[]) => {

//   todoContainer.innerText = ""
//   TodoArray.map(item => {
//     generateTodoItem(item.title, item.isCompleted, item.id)

//   })

// } 
 
// again writing  

 interface Todo {
  title:string, 
  readonly  id:string,

 } 

 const TodosArray:Array<Todo>=[] ; 
  
const Form=document.getElementById("myform") as HTMLFormElement; 
const input=document.getElementById("todoInput") as HTMLInputElement  
const todosdiv=document.getElementById("todos") as HTMLDivElement
 
Form.onsubmit =(e)=>{ 
  e.preventDefault(); 
    
  const todo:Todo={
    title: input.value, 
    id: String(Math.random()*100) 
  } 
  TodosArray.push(todo); 
  renderTodo(TodosArray); 
  input.value=""

}  


const renderTodo=(TodoArray:Todo[])=>{ 
  todosdiv.innerText=""
  TodoArray.map(item=>{ 
    console.log(item.title)
    generatetodo(item.title,item.id)
  })

} 
const generatetodo=(title:string,id:string)=>{   
  const div=document.createElement("div"); 
  const p=document.createElement("p")  
  p.innerText=title 
 const button=document.createElement("button") 
 button.innerText="x" 
 button.onclick=()=>{
  deletetodo(id)
 }
  div.append(p,button); 
  todosdiv.append(div) ;
} 
 
const deletetodo =(id:string)=>{ 
    
  const filter= TodosArray.findIndex(item => item.id === id)   
  TodosArray.splice(filter,1)
  renderTodo(TodosArray)

}
 
