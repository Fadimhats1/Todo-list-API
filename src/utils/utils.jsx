import React from 'react'
import { createContext } from 'react'


export const URL_API = 'http://localhost:3000'
export const utilsContext = createContext();
export const replaceWithBr = (text) => text.replace(/\n/g, "<br />")  /* "BIAR ADA NEWLINE" DI BAGIAN DESCRIPTIONNYA */


const UtilsAPI = ({values, children}) => {
  return (
    <utilsContext.Provider value={values}>
        {children}
    </utilsContext.Provider>
  )
}

export default UtilsAPI