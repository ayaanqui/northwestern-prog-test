import { render, screen } from "@testing-library/react"
import MyItems from "../components/MyItems"

test("renders MyItems component", () => {
  const list = new Array<string>()

  render(<MyItems list={list} />)
  const elem = screen.getByText("My Items")
  expect(elem).toBeInTheDocument()
})
