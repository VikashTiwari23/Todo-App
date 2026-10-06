import { useState } from "react";

const CreateTodo = ({onAdd}:{onAdd:(topic:string,description:string)=>void}) => {
    const [create , setCreate] = useState(false);
    const [topic,setTopic] = useState("");
    const [description,setDescription] = useState("");
    

  const createTodo = () => {
    setCreate(!create);
  };
  const addTodo = () => {
    
    onAdd(topic,description);
    setTopic("");
    setDescription("");
    setCreate(false);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-2">
        <div className="min-w-[300px] max-w-[500px] bg-gray-800 p-5 rounded-md flex justify-between items-center gap-3">
          <div className="text-4xl text-yellow-400 font-semibold ">Create New Todo</div>
          <button onClick={createTodo} className="bg-red-500 px-5 py-3 px-5">Add Todo</button>
        </div>
        {create && <>
        <div className="mx-4 bg-gray-800 p-5 rounded-2xl flex flex-col gap-3 min-w-[400px] max-w-[500px]">
            <h2 className="text-orange-400 font-semibold text-2xl px-5">New Todo</h2>
            <input value={topic} onChange={(e)=>setTopic(e.target.value)} className="bg-green-500 outline-none px-6 text-xl py-3 rounded-lg" type="text" placeholder="Enter todo Topic" />
            <input  value={description} onChange={(e)=>setDescription(e.target.value)}   className="bg-green-500 outline-none px-6 text-xl py-3 rounded-lg" type="text" placeholder="Enter todo Description"/>
            <button onClick={addTodo} className="bg-red-500 px-4 py-3 min-w-[190px] rounded-xl">Add</button>
        </div>
        </>}
      </div>
  )
}

export default CreateTodo
