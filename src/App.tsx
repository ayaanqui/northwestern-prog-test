import { useReducer } from "react"
import "./styles/App.css"
import MainLayout from "./layout/MainLayout"
import Header from "./components/Header"
import AddItem from "./components/AddItem"
import MyItems from "./components/MyItems"
import { initialState, reducer } from "./store/reducer"

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToList = (item: string) => {
    dispatch({ type: "ADD", payload: { value: item } })
  }

  const removeFromList = (index: number) => {
    dispatch({ type: "REMOVE", payload: { index } })
  }

  return (
    <MainLayout>
      <Header />
      <AddItem addItem={addToList} />
      <MyItems list={state.list} remove={removeFromList} />
    </MainLayout>
  )
}

export default App
