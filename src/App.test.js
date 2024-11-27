import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PortfolioWebsite component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aastika Banstola/i);
  expect(linkElement).toBeInTheDocument();
});
