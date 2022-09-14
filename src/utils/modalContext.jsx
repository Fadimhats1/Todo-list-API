import React, { createContext, useState } from 'react'
export const modalContext = createContext();

const ModalContext = ({ children }) => {
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
        </modalContext.Provider>
    )
}

export default ModalContext