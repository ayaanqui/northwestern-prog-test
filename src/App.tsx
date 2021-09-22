import React, { useState } from "react"
import "./styles/App.css"
import MainLayout from "./layout/MainLayout"
import Header from "./components/Header"
import AddItem from "./components/AddItem"

const App = () => {
  const [list, setList] = useState<Array<String>>([])

  const addToList = (item: string) => {
    setList([item, ...list])
  }

  return (
    <MainLayout>
      <Header />
      <AddItem />
    </MainLayout>
  )
}

export default App
