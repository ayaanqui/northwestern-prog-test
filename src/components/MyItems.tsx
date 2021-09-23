import { Box, List } from "@mui/material"
import Item from "./Item"
import MyItemsHeader from "./MyItemsHeader"
import { StateContext } from "../store/reducer"
import { useContext, useEffect, useState } from "react"

const MyItems = ({ list }: { list: Array<string> }) => {
  return (
    <Box marginTop="2em">
      <MyItemsHeader numItems={list.length} />

      <List>
        {list.map((item, i) => (
          <Item value={item} index={i} key={`item#${i}`} />
        ))}
      </List>
    </Box>
  )
}

export default MyItems
