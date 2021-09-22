import { render, screen } from "@testing-library/react"
import MyItems from "../components/MyItems"

test("renders MyItems component", () => {
  const list = new Array<string>()

  render(
    <MyItems
      list={list}
      remove={(index: number) => list.filter((_, i) => i !== index)}
    />,
  )
  const elem = screen.getByText("My Items")
  expect(elem).toBeInTheDocument()
})
