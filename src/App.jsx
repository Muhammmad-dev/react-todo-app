import { useEffect, useState } from "react"
import TodoForm from "./companents/TodoForm"
import TodoList from "./companents/TodoList"

function App(){
const[todos, setTodos]=useState(()=>{
   const saved=localStorage.getItem('todos')
   return saved?JSON.parse(saved):[]
})

const addTodo=(t)=>{
  const newTodo={id: Date.now(),text:t,completed :false}
  setTodos([...todos, newTodo])
}

useEffect(()=>{
localStorage.setItem('todos', JSON.stringify(todos))
},[todos])




const deleteTodo=(id)=>{
setTodos(todos.filter(t=> t.id!==id))
}

const toggleTodo =(id)=>{
setTodos(todos.map(f => f.id === id ? {...f, completed: !f.completed} : f) )

}



return<>
 <div className="w-full max-w-2xl bg-gray-50 min-h-screen p-8 mx-auto  flex justify-center items-center flex-col">
  <h1 className="text-[30px] font-bold m-8  ">My Todo List</h1>
  <TodoForm addTodo={addTodo}/>
  {todos.length===0?(
  <p>Vazifalar yoq...</p>
):(
 <TodoList  todos={todos} deleteTodo={deleteTodo} toggleTodo ={toggleTodo }/>
)}
  </div>

</>
}
export default App