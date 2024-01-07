/**
 * GreetWithName should render the text hello and if a name is passed into the component 
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { GreetWithName } from "./GreetWithName";

describe('GreetWithName', () => {
  test('renders correctly', () => {
    render(<GreetWithName />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<GreetWithName name="Shivam" />)
    const textElement = screen.getByText('Hello Shivam');
    expect(textElement).toBeInTheDocument();
  });
});