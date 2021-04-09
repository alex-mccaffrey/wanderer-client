import { render, screen } from '@testing-library/react';
import App from './App';

test('renders wanderer title', () => {
  render(<App />);
  const linkElement = screen.getByText(/wanderer/i);
  expect(linkElement).toBeInTheDocument();
});
