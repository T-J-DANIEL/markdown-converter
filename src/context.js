import React, { createContext, useState, useContext } from "react"

const appContext = createContext()

const AppContextProvider = ({ children }) => {
  const [textInput, setTextInput] = useState("# Enter Your Markdown Here")
  return (
    <appContext.Provider value={{ textInput, setTextInput }}>
      {children}
    </appContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(appContext)
}

export { useGlobalContext, AppContextProvider }
