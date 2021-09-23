import { render, screen } from "@testing-library/react"
import AddItem from "../components/AddItem"

test("renders AddItem component", () => {
  const list = new Array<string>()

  render(<AddItem />)
  const elem = screen.getByText("Add Item")
  expect(elem).toBeInTheDocument()
})
