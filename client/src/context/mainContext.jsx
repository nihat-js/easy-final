import { createContext } from "react"
import { useState } from "react"
import { useContext, } from "react"


export const MainContext = createContext(null)




export default function Provider({ children }) {
  const [wishList, setWishList]  = useState (
    [
      
      {
        "id": "63d4f89b7e1b0fbbdedf6d4d",
        "addedDate": "27 January ",
      },
    ]
  )

  return (
    <MainContext.Provider value={{ wishList, setWishList }} >
      {children}
    </MainContext.Provider>
  )
}
