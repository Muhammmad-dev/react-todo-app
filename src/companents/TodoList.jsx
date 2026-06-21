function TodoList({todos ,deleteTodo,toggleTodo }){
    return<>
    {todos.map(itm=>(
        <div key={itm.id} className="flex  justify-between items-center w-full max-w-[400px] mb-4">
            <h1 className={itm.completed?"line-through text-gray-400":""}>{itm.text}</h1>
            <div className="flex gap-[30px] ">
                <button onClick={()=>deleteTodo(itm.id)} className='border rounded-lg duration-200 ease-in px-4 bg-[red] hover:bg-red-800 text-[white]' >delete</button>
            <button onClick={()=>toggleTodo (itm.id)} className='border rounded-lg duration-200 ease-in  hover:bg-green-600 px-4 bg-green-500 text-[white]'>Done</button>
            </div>
        </div>
    ))}
    </>
}

export default TodoList