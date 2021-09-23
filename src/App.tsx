import { useReducer } from "react"
import "./styles/App.css"
import MainLayout from "./layout/MainLayout"
import Header from "./components/Header"
import AddItem from "./components/AddItem"
import MyItems from "./components/MyItems"
import { initialState, reducer, StateContext } from "./store/reducer"

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{ state: initialState, dispatch }}>
      <MainLayout>
        <Header />
        <AddItem />
        <MyItems list={state.list} />
      </MainLayout>
    </StateContext.Provider>
  )
}

export default App
