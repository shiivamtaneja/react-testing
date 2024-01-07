import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });
    expect(incrementButton).toBeInTheDocument();

    const decrementButton = screen.getByRole('button', {
      name: 'Decrement'
    });
    expect(decrementButton).toBeInTheDocument();

    const resetButton = screen.getByRole('button', {
      name: 'Reset'
    });
    expect(resetButton).toBeInTheDocument();

    const switchSignsButton = screen.getByRole('button', {
      name: 'Switch Signs'
    });
    expect(switchSignsButton).toBeInTheDocument();
  });

  test('renders count of 0', () => {
    render(<Counter />);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    userEvent.setup()

    render(<Counter />);

    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    });

    await userEvent.click(incrementButton);

    const countElement = screen.getByRole('heading', {
      level: 1
    });
    expect(countElement).toHaveTextContent('1');
  });
});