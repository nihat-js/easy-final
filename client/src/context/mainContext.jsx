import { createContext } from "react"
import { useState } from "react"
import { useContext, } from "react"


export const MainContext = createContext(null)




export default function Provider({ children }) {
  const [wishList, setWishList]  = useState (
    [
      {
        "id": "63d4f89a7e1b0fbbdedf6d49",
        "addedDate": "dfasfasfas",
      },
      {
        "id": "63d4f8af7e1b0fbbdedf6d4f",
        "addedDate": "dfasfasfas",
      },
    ]
  )

  return (
    <MainContext.Provider value={{ wishList, setWishList }} >
      {children}
    </MainContext.Provider>
  )
}
