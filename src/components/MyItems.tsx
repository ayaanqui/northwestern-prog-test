import { Box, Chip, List, Typography, Stack } from "@mui/material"
import Item from "./Item"

export interface MyItemsProps {
  list: Array<string>
  remove: (index: number) => void
}

const MyItems = ({ list, remove }: MyItemsProps) => {
  return (
    <Box marginTop="2em">
      <Stack direction="row" spacing={2}>
        <Typography variant="h3" fontSize="1.5em">
          My Items
        </Typography>
        <Chip label={list.length} />
      </Stack>

      <List>
        {list.map((item, i) => (
          <Item value={item} index={i} key={`item#${i}`} remove={remove} />
        ))}
      </List>
    </Box>
  )
}

export default MyItems
