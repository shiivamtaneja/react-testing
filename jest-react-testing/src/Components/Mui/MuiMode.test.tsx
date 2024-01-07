import { render, screen } from '@testing-library/react';
import { AppProvider } from '../../Providers/AppProvider';
import { MuiMode } from './MuiMode';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />, {
      wrapper: AppProvider
    });

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('dark mode');
  });
});