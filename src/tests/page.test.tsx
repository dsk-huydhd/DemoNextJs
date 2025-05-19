// Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '@/app/page'; // hoặc từ đường dẫn thực tế bạn đặt file
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />);
    const nextLogo = screen.getByAltText('Next.js logo');
    expect(nextLogo).toBeInTheDocument();
  });

  it('renders all 3 list items', () => {
    render(<Home />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('renders the "Deploy now" button', () => {
    render(<Home />);
    const deployButton = screen.getByRole('link', { name: /deploy now/i });
    expect(deployButton).toBeInTheDocument();
    expect(deployButton).toHaveAttribute('href', expect.stringContaining('vercel.com'));
  });

  it('renders footer links correctly', () => {
    render(<Home />);
    expect(screen.getByText(/learn/i)).toBeInTheDocument();
    expect(screen.getByText(/examples/i)).toBeInTheDocument();
    expect(screen.getByText(/go to nextjs.org/i)).toBeInTheDocument();
  });
});
