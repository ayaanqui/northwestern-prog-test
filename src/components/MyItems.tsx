import { Box, Chip, List, Typography, Stack } from "@mui/material"
import Item from "./Item"
import MyItemsHeader from "./MyItemsHeader"

export interface MyItemsProps {
  list: Array<string>
  remove: (index: number) => void
}

const MyItems = ({ list, remove }: MyItemsProps) => {
  return (
    <Box marginTop="2em">
      <MyItemsHeader numItems={list.length} />

      <List>
        {list.map((item, i) => (
          <Item value={item} index={i} key={`item#${i}`} remove={remove} />
        ))}
      </List>
    </Box>
  )
}

export default MyItems
