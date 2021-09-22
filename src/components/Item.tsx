import { IconButton, List, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

export interface ItemProps {
  value: string
  index: number
}

const Item = ({ value, index }: ItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }>
      <ListItemText primary={value} secondary="Jan 9, 2014" />
    </ListItem>
  )
}

export default Item
