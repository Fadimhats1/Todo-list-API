import React from 'react'
import { useContext } from 'react'
import { utilsContext } from '../utils/utils'

const Form = () => {
    const dataAPI = useContext(utilsContext);
    return (
        <div className='form w-full flex flex-col gap-5'>
            <div className='flex flex-col'>
                <label className='font-bold' htmlFor="title">Title</label>
                <input autoFocus placeholder='Fill the title here...' className='bg-mountainMeadow placeholder:text-white text-white rounded-md px-4 py-2' type="text" id='title' name='title' onChange={(e)=> dataAPI.functions.changeInputHandle(e)} value={dataAPI.todo.title}/>
            </div>
            <div className='flex flex-col'>
                <label className='font-bold' htmlFor="desc">Description</label>
                <textarea placeholder="Description about something you're gonna do..." className='rounded-md placeholder:text-white bg-mountainMeadow text-white resize-none px-4 py-2 scrollbar-thin scrollbar-thumb-cello scrollbar-track-loafer overflow-y-scroll scrollbar-thumb-rounded-md scrollbar-track-rounded-md' name="desc" id="desc" cols="30" rows="7" onChange={(e)=> dataAPI.functions.changeInputHandle(e)} value={dataAPI.todo.desc}></textarea>
            </div>
            <button className='mt-4 bg-cello rounded-md py-2 font-bold hover:bg-blue-700 text-white' onClick={()=>{
                 dataAPI.functions.submitHandle()
                 dataAPI.functions.resetTodo()
            }}>{dataAPI.isUpdate ? 'Update' : 'Add'}</button>
        </div>
    )
}

export default Form