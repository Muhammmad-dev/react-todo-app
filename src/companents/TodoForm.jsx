import { useState } from "react"

function TodoForm({addTodo}){
const[item, setitem]=useState("")

const handlfunck=()=>{
if(item.trim()==="")return 
addTodo(item)
setitem('')
}

    return<div className="flex gap-[30px] mb-5" >
    <input type="text" placeholder="Vazifalr" value={item} onChange={(e)=>setitem(e.target.value)} className="p-2 border rounded-lg "  />
    <button onClick={handlfunck} className="text-[white] border rounded-xl duration-200 ease-in px-6 bg-sky-500 hover:bg-sky-700 ">Add</button>
    </div>
}
export default TodoForm