// BookingForm.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    test('renders date input with required attribute', () => {
        render(<BookingForm onSubmit={() => {}} />);
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('required');
    });

    test('renders time select with required attribute', () => {
        render(<BookingForm onSubmit={() => {}} />);
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute('required');
    });

    test('renders guests input with min and max attributes', () => {
        render(<BookingForm onSubmit={() => {}} />);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toHaveAttribute('required');
    });

    test('renders occasion select without required attribute', () => {
        render(<BookingForm onSubmit={() => {}} />);
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).not.toHaveAttribute('required');
    });
});
