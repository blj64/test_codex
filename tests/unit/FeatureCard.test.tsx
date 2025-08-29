import { render, screen } from '@testing-library/react';
import FeatureCard from '@/components/FeatureCard';

test('renders feature card', () => {
  render(<FeatureCard title="T">Content</FeatureCard>);
  expect(screen.getByText('Content')).toBeInTheDocument();
});
