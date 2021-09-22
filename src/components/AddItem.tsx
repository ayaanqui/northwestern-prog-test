import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"

export interface AddItemProps {
  addItem: (item: string) => void
}

const AddItem = ({ addItem }: AddItemProps) => {
  const [input, setInput] = useState<string>("")

  const updateInput = (event: any) => {
    setInput(event.target.value)
  }

  const submit = () => {
    // Ignore if input is just whitespace
    if (input.trim() === "") return

    setInput("")
    addItem(input)
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <TextField
        id="outlined-basic"
        label="Item"
        variant="outlined"
        fullWidth
        style={{ flex: 3 }}
        onChange={updateInput}
        value={input}
      />

      <Button
        variant="contained"
        fullWidth
        style={{ flex: 1 }}
        onClick={submit}>
        Add Item
      </Button>
    </Stack>
  )
}

export default AddItem
