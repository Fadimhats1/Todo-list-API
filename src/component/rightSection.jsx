import React from 'react'
import { useContext } from 'react'
import { utilsContext } from '../utils/utils'
import TodoItem from './todoItem'

const RightSection = () => {
  const dataAPI = useContext(utilsContext);
  let todos = dataAPI.todoList.map((data)=> <TodoItem key={data.id} todo={data} functions={dataAPI.functions} />) 
  return (
    <div className='w-4/6 h-screen max-h-screen bg-mountainMeadow p-8 flex flex-col gap-6'>
        <input type="text" placeholder='Search' className='py-2 px-4 text-3xl bg-loafer rounded-md' />
        {todos.length ? <div className='grid grid-cols-4 grid-rows-3 gap-6 h-full pb-8'>
          {todos}
        </div> : <div className='flex h-full items-center justify-center text-7xl text-white font-bold'>There's no todo</div> }
    </div>
  )
}

export default RightSection