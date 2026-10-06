import { useState } from "react";


const ViewTodos = ({todos,onDelete}:{todos:{topic:string;description:string;date:string}[];onDelete:(index:number)=>void} ) => {
    const [openIndex,setOpenIndex] = useState<number|null>(null);
  return (
    <div className="bg-gray-800 p-2 rounded-xl flex flex-col gap-3">
        <h1 className="text-4xl text-yellow-400 font-semibold text-center ">All Todos</h1>
        {todos.map((todo:any,index:number)=>
        <div key={index} className="bg-yellow-400 mt-2 px-5 py-3 rounded-3xl ">
          <div className="grid grid-cols-[1fr_120px_50px]">
            <div className="font-bold">{todo.topic}</div>
            <div className="font-bold">{todo.date}</div>
            <div  className="font-bold">
                {openIndex === index ? <div className='flex flex-col text-sm cursor-pointer'>
                    <div onClick={() => { onDelete(index); setOpenIndex(null); }} className="bg-red-500 px-2 py-1 rounded-lg">Delete</div>
                    <div   onClick={() => setOpenIndex(null)}
className="border-amber-500 px-2 py-1 rounded-lg ">Cancel</div>
                </div> :  <div onClick={() => setOpenIndex(index)}
                  className="cursor-pointer">Edit</div>
                }
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-2">{todo.description}</div>
        </div>

        )}
      </div>
  )
}

export default ViewTodos
