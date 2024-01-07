import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterKeyboardInteractions } from "./CounterKeyboardInteractions";

describe('Counter', () => {
  test('renders correctly', () => {
    render(<CounterKeyboardInteractions />);

    const countElement = screen.getByRole('heading', { level: 1 });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 10 after clicking the set button', async () => {
    userEvent.setup();

    render(<CounterKeyboardInteractions />);

    const amountInput = screen.getByRole('spinbutton');
    await userEvent.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole('button', { name: 'Set' });
    await userEvent.click(setButton);

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    userEvent.setup();

    render(<CounterKeyboardInteractions />);

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await userEvent.tab();
    expect(incrementButton).toHaveFocus();

    const amountInput = screen.getByRole('spinbutton');
    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    const setButton = screen.getByRole('button', { name: 'Set' });
    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
