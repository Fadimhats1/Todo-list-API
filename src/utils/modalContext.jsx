import React, { createContext, useState } from 'react'
import { replaceWithBr } from './utils';

export const modalContext = createContext();

const ModalContext = ({showTodo, functions, children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    function modalHandle() {
        setModalOpen(current => !current);
    }

    let modalUtils = {
        modalOpen: modalOpen,
        modalHandle: modalHandle,
    }

    return (
        <modalContext.Provider value={modalUtils}>
            {children}
            <Modal modalUtils={modalUtils} showTodo={showTodo} functions={functions}/>
        </modalContext.Provider>
    )
}

export default ModalContext

const Modal = ({showTodo, modalUtils, functions}) => {
    return (
        <div className={`modal fixed bg-neutral-800/[.7] w-screen h-screen top-0 left-0 flex items-center justify-center font-dongle ${modalUtils.modalOpen ? "opacity-100 z-50" : "opacity-0 -z-10"}`} onClick={
            (e)=>{
                if(e.target.className.includes('modal'))
                    modalUtils.modalHandle()
            }
        }>
            <div className={`min-h-[70%] max-h-[70%] min-w-[50%] max-w-[50%] bg-loafer rounded-md flex flex-col justify-center px-12 relative`}>
                <div className='flex justify-between items-center gap-4'>
                    <div className='text-5xl font-bold'>{showTodo.title != '' ? showTodo.title : 'No Title'}</div>
                    <div className='flex gap-4 text-3xl text-white'>
                        <button className='px-4 bg-green-500 rounded-md hover:bg-green-400' onClick={()=>{
                            functions.editHandle(showTodo)
                            modalUtils.modalHandle()
                        }}>Edit</button>
                        <button className='px-4  bg-red-500 rounded-md hover:bg-red-400' onClick={()=> {
                            functions.removeHandle(showTodo.id)
                            modalUtils.modalHandle()
                        }}>Remove</button>
                    </div>
                </div>
                <div className='h-96 text-3xl mt-6 text-justify scrollbar-thin scrollbar-thumb-cello scrollbar-track-loafer overflow-y-scroll scrollbar-thumb-rounded-md scrollbar-track-rounded-md pr-4' dangerouslySetInnerHTML={{__html: showTodo.desc != '' ? replaceWithBr(showTodo.desc): 'No description...'}}>
                </div>
            </div>
        </div>
    )
}
