import { Chip, Typography, Stack } from "@mui/material"

export interface MyItemsHeaderProps {
  numItems: number
}

const MyItemsHeader = ({ numItems }: MyItemsHeaderProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Typography variant="h3" fontSize="1.5em">
        My Items
      </Typography>
      <Chip label={numItems} />
    </Stack>
  )
}

export default MyItemsHeader
