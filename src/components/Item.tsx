import { IconButton, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export interface ItemProps {
  value: string
  index: number
  remove: (index: number) => void
}

const Item = ({ value, index, remove }: ItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => remove(index)}>
          <DeleteIcon />
        </IconButton>
      }>
      <ListItemText primary={value} />
    </ListItem>
  )
}

export default Item
