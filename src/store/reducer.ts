import { Dispatch, createContext } from "react"

export interface State {
  list: Array<string>
}

export const initialState: State = {
  list: Array<string>(),
}

export interface ActionAdd {
  type: "ADD"
  payload: { value: string }
}

export interface ActionRemove {
  type: "REMOVE"
  payload: { index: number }
}

export interface StateContextProps {
  state: State
  dispatch: Dispatch<ActionAdd | ActionRemove>
}

export const StateContext = createContext({} as StateContextProps)

export const reducer = (state: State, action: ActionAdd | ActionRemove) => {
  switch (action.type) {
    case "ADD":
      return { list: [action.payload.value, ...state.list] }
    case "REMOVE":
      return { list: state.list.filter((_, i) => i !== action.payload.index) }
    default:
      throw new Error()
  }
}
