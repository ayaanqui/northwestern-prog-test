import { useState } from "react"
import "./styles/App.css"
import MainLayout from "./layout/MainLayout"
import Header from "./components/Header"
import AddItem from "./components/AddItem"
import MyItems from "./components/MyItems"

const App = () => {
  const [list, setList] = useState<Array<string>>([])

  const addToList = (item: string) => {
    setList([item, ...list])
  }

  const removeFromList = (index: number) => {
    setList(list.filter((_, i) => i !== index))
  }

  return (
    <MainLayout>
      <Header />
      <AddItem addItem={addToList} />
      <MyItems list={list} remove={removeFromList} />
    </MainLayout>
  )
}

export default App
