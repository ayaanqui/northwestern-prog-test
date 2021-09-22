import { List } from "@mui/material"
import Item from "./Item"

export interface MyItemsProps {
  list: Array<string>
  remove: (index: number) => void
}

const MyItems = ({ list, remove }: MyItemsProps) => {
  return (
    <List>
      {list.map((item, i) => (
        <Item value={item} index={i} key={`item#${i}`} remove={remove} />
      ))}
    </List>
  )
}

export default MyItems
