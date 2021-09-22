export const initialState = {
  list: Array<string>(),
}

export interface State {
  list: Array<string>
}

export const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "ADD":
      return { list: [action.payload.value, ...state.list] }
    case "REMOVE":
      return { list: state.list.filter((_, i) => i !== action.payload.index) }
    default:
      throw new Error()
  }
}
