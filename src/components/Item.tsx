import { IconButton, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useContext } from "react"
import { StateContext } from "../store/reducer"

export interface ItemProps {
  value: string
  index: number
}

const Item = ({ value, index }: ItemProps) => {
  const { dispatch } = useContext(StateContext)

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch({ type: "REMOVE", payload: { index } })}>
          <DeleteIcon />
        </IconButton>
      }>
      <ListItemText primary={value} />
    </ListItem>
  )
}

export default Item
