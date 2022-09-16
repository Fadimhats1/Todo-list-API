import React from 'react'
import { useContext } from 'react'
import { modalContext } from '../utils/modalContext';
import { replaceWithBr } from '../utils/utils';


const TodoItem = ({todo, functions}) => {
  const modalUtils = useContext(modalContext);


  return (
    <div className={`card-todo flex-1 rounded-md bg-yellow-500 todo-item drop-shadow-lg hover:bg-yellow-400 cursor-pointer break-normal min-w-[32%] ${todo.isDone ? "bg-yellow-600 hover:bg-yellow-600" : ""}`} onClick={(e)=>{
      if(!e.target.className.includes('check-done') && !e.target.className.includes('button-remove')){
        functions.dataToShowHandle(todo)
        modalUtils.modalHandle()
      }
        
    }}>
      <div className='text-3xl font-bold text-white px-4 py-2 flex items-center justify-between overflow-hidden gap-4 h-14'>
        <div className='min-w-[32%] flex items-center gap-3'>
          <input checked={todo.isDone ? true: false} className='check-done w-5 h-5 shrink-0 cursor-pointer' type="checkbox" name="isDone" id="check" onChange={(e)=>{
            let checkedTodo = {...todo}
            checkedTodo['isDone'] = e.target.checked;
            functions.todoCheck(checkedTodo);
          }}/>
          <p className={`truncate leading-tight ${todo.isDone ? "line-through" : ""}`}>{todo.title}</p>
        </div>
        <button className='button-remove px-3 rounded bg-red-500' onClick={()=> functions.removeHandle(todo.id)}>&times;</button>
      </div>
      <hr />
      <div className='h-36 w-full text-2xl text-neutral-200 text px-4 pt-2 pb-2'>
        <p className={`line-clamp-4 leading-tight ${todo.isDone ? "line-through" : ""}`} dangerouslySetInnerHTML={{__html: replaceWithBr(todo.desc)}}></p>
      </div>
    </div>
  )
}

export default TodoItem