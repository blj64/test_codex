import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@/i18n';
import Header from '@/components/Header';

test('renders brand name', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
  expect(screen.getByText('Secaluxe')).toBeInTheDocument();
});
