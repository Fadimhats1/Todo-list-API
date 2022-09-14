import React from 'react'
import LeftSection from './leftSection'
import RightSection from './rightSection'

const Body = () => {
  return (
    <div className='flex'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default Body