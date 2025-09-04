import { describe, it, expect } from 'vitest';   // 👈 add this
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders Vite + React text', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
