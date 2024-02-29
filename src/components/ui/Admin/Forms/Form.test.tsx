import { render, fireEvent } from '@testing-library/react';
import { Form } from './Form';

test('renders Form component', () => {
  const onSubmit = jest.fn();
  const title = 'Test Form';
  const { getByText } = render(<Form onSubmit={onSubmit} title={title} />);
  expect(getByText(title)).toBeInTheDocument();
});

test('calls onSubmit function when form is submitted', () => {
  const onSubmit = jest.fn();
  const title = 'Test Form';
  const { getByTestId } = render(
    <Form onSubmit={onSubmit} title={title} data-testid="form" />
  );
  fireEvent.submit(getByTestId('form'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
