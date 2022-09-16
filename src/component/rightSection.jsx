import React from 'react'
import { useContext } from 'react'
import { utilsContext } from '../utils/utils'
import TodoItem from './todoItem'

const RightSection = () => {
  const dataAPI = useContext(utilsContext);
  let todos = dataAPI.todoList.map((data)=> <TodoItem key={data.id} todo={data} functions={dataAPI.functions} />) 
  return (
    <div className='w-4/6 h-screen max-h-screen bg-mountainMeadow flex flex-col gap-4 p-8'>
        <input type="text" placeholder='Search Title...' className='py-2 px-4 text-3xl bg-loafer rounded-md' onChange={(e)=> dataAPI.functions.liveSearchHandle(e)}/>
        <div className='pr-8 mb-12 flex flex-wrap gap-4 scrollbar-thin scrollbar-thumb-cello scrollbar-track-loafer overflow-y-scroll scrollbar-thumb-rounded-md scrollbar-track-rounded-md'>
        {todos}
        </div>
    </div>
  )
}

export default RightSection