import React from 'react'
import { createContext } from 'react'


export const URL_API = 'http://localhost:3000'
export const utilsContext = createContext();

const UtilsAPI = ({values, children}) => {
  return (
    <utilsContext.Provider value={values}>
        {children}
    </utilsContext.Provider>
  )
}

export default UtilsAPI