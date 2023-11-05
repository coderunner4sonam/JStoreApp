import React, { createContext, useState } from 'react'
export const globalstate = createContext();

function Context({children}) {
    let [count , setCount]=useState(0);
  return (
    <globalstate.Provider value={{count , setCount}}>
      {children}
    </globalstate.Provider>
  )
}

export default Context;

