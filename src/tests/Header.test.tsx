import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

test("renders Header component", () => {
  render(<Header />)
  const elem = screen.getByText("Manage My Items")
  expect(elem).toBeInTheDocument()
})
