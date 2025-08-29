import { contactSchema } from '@/lib/validation';

test('contact schema validates data', () => {
  const parsed = contactSchema.parse({ name: 'A', email: 'a@a.com', message: 'hi' });
  expect(parsed.email).toBe('a@a.com');
});

test('contact schema rejects invalid email', () => {
  expect(() => contactSchema.parse({ name: 'A', email: 'bad', message: 'hi' })).toThrow();
});
