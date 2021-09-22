import { Button, Stack, TextField } from "@mui/material"

const AddItem = (props: any) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" mt="sm">
      <TextField
        id="outlined-basic"
        label="Add item..."
        variant="outlined"
        fullWidth
        style={{ flex: 3 }}
      />

      <Button variant="contained" fullWidth style={{ flex: 1 }}>
        Add Item
      </Button>
    </Stack>
  )
}

export default AddItem
