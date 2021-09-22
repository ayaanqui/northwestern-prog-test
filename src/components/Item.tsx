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
      <ListItemText primary={value} secondary="Jan 9, 2014" />
    </ListItem>
  )
}

export default Item
