import { createContext } from "react"
import { useState } from "react"
import { useContext ,  } from "react"


export const MainContext = createContext()




export default function Provider({children}) {
  const [wishList,setWishList] = useState([]) 

  return (
    <MainContext.Provider value={{wishList,setWishList}} >
      {children}
    </MainContext.Provider>
  )
}
