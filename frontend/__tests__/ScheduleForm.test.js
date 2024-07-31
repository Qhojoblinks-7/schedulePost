// frontend/src/__tests__/ScheduleForm.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ScheduleForm from '../components/ScheduleForm';

test('renders ScheduleForm component', () => {
  render(<ScheduleForm />);
  const linkElement = screen.getByText(/Schedule Your Post/i);
  expect(linkElement).toBeInTheDocument();
});
