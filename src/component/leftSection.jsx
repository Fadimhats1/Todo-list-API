import React from 'react'
import Form from './form'

const LeftSection = () => {
    return (
        <div className="w-2/6 h-screen max-h-screen bg-loafer p-8 text-3xl drop-shadow-lg">
            <h1 className='text-5xl font-bold mb-3'>What are you gonna do today ?</h1>
            <Form />
        </div>
    )
}

export default LeftSection