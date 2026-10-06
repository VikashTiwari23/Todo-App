import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo"
import ViewTodos from "./ViewTodos"

type Todo = {
  topic: string;
  description: string;
  date: string;
};

const HomePage = () => {
  const [todos,setTodos] = useState<Todo[]>(()=>{
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  })

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const addTodo = (topic:string,description:string) => {
    if(!topic.trim() || !description.trim()) return;
    const newTodo = {topic:topic,description:description,date:new Date().toLocaleString()};
    setTodos([...todos,newTodo]);
  }
  const deleteTodo = (index:number) => {
    setTodos(todos.filter((_,i)=>i!==index));
  }
  return (
    <div className="bg-black min-h-[100vh] max-w-[100vw] p-5 grid grid-cols-2 gap-5">
      <CreateTodo onAdd = {addTodo} />
      <ViewTodos todos={todos} onDelete={deleteTodo} />
    </div>
  )
}

export default HomePage
