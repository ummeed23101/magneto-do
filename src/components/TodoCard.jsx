import React from 'react'

export const TodoCard = ({task, status, handleDeleteTodo}) => {
    const trimmedTask = task.length > 25 ? `${task.slice(0, 25)}...` : task
  return (
    <div className='bg-white border-gray-200 h-[100px] w-[400px] rounded-md flex justify-center items-center shadow-xs relative'>
        <button className=' text-[#99A2BE] text-2xl h-12 w-12 rounded-md hover:text-[#4A6CF7] absolute left-4'><i className="fa-solid fa-circle-check"></i></button>
        <h3 className='font-medium p-4 text-md'>{trimmedTask}</h3>
        <button onClick={()=>handleDeleteTodo(task)} className='bg-[#F1F4FB] text-[#99A2BE] h-12 w-12 rounded-md hover:text-[#f54949] hover:bg-[#e2e6ee] absolute right-4'><i className="fa-solid fa-trash-can "></i></button>
    </div>
  )
}
