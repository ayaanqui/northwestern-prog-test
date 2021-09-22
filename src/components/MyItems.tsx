import { List } from "@mui/material"
import Item from "./Item"

export interface MyItemsProps {
  list: Array<string>
}

const MyItems = ({ list }: MyItemsProps) => {
  return (
    <List>
      {list.map((item, i) => (
        <Item value={item} index={i} />
      ))}
    </List>
  )
}

export default MyItems
