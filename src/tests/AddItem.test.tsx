import React from "react"
import { render, screen } from "@testing-library/react"
import AddItem from "../components/AddItem"

test("renders AddItem component", () => {
  const list = new Array<string>()

  render(<AddItem addItem={(item) => list.push(item)} />)
  const linkElement = screen.getByText("Add Item")
  expect(linkElement).toBeInTheDocument()
})
