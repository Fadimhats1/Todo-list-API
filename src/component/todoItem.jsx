import React from 'react'

const TodoItem = ({todo, functions}) => {
  return (
    <div className='rounded-md bg-yellow-500 todo-item drop-shadow-lg hover:bg-yellow-400 cursor-pointer break-normal'>
      <div className='h-20 w-full text-3xl font-bold text-white px-4 flex items-center justify-between overflow-hidden gap-4'>
        <p className='line-clamp-2 leading-tight'>{todo.title}</p>
        <button className='text-lg px-3 rounded bg-red-500' onClick={()=> functions.removeHandle(todo.id)}>X</button>
      </div>
      <hr />
      <div className='w-full text-2xl text-neutral-200 text px-4 pt-2 pb-2'>
        <p className='line-clamp-3 leading-tight'>{todo.desc}</p>
      </div>
    </div>
  )
}

export default TodoItem