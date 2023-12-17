import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Button from "./index";

test("quero testar de o handleclick esta funcionando corretamente", () => {
  render(<Button content="botao" handleClick={() => {}} />);
  const button = screen.getByTestId('button-test');
    fireEvent.click()
  expect(button.nodes[0]).toBe('botao');
});