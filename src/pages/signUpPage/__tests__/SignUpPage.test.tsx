import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SignUpPage } from "../index";

const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('SignUpPage', () => {
    afterEach(() => {
        consoleLogMock.mockClear();
    });

    afterAll(() => {
        consoleLogMock.mockRestore();
    });
    it('should render the component with input fields and submit button', () => {
        render(<SignUpPage />);

        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Create your password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
    });

    it('should show error for invalid email', async () => {
        render(<SignUpPage />);

        const emailInput = screen.getByPlaceholderText('Email');
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        fireEvent.blur(emailInput);

        expect(await screen.findByText('Invalid email')).toBeInTheDocument();
    });

    it('should show validation success for a valid email', async () => {
        render(<SignUpPage />);

        const emailInput = screen.getByPlaceholderText('Email');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.blur(emailInput);

        expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
    });

    it('should show errors for invalid password by checking color', async () => {
        render(<SignUpPage />);

        const passwordInput = screen.getByPlaceholderText('Create your password');
        fireEvent.change(passwordInput, { target: { value: 'short' } });
        fireEvent.blur(passwordInput);

        expect(await screen.findByText('8 characters or more (no spaces)')).toHaveStyle('color: #FF8080');
        expect(screen.getByText('Uppercase and lowercase letters')).toHaveStyle('color: #FF8080');
        expect(screen.getByText('At least one digit')).toHaveStyle('color: #FF8080');
    });

    it('should pass validation for a valid password by checking color', async () => {
        render(<SignUpPage />);

        const passwordInput = screen.getByPlaceholderText('Create your password');
        fireEvent.change(passwordInput, { target: { value: 'Valid123' } });
        fireEvent.blur(passwordInput);

        expect(screen.queryByText('8 characters or more (no spaces)')).toHaveStyle('color: #27B274B2');
        expect(screen.queryByText('Uppercase and lowercase letters')).toHaveStyle('color: #27B274B2');
        expect(screen.queryByText('At least one digit')).toHaveStyle('color: #27B274B2');
    });

    it('should submit the form with valid data', async () => {
        render(<SignUpPage />);

        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Create your password');
        const submitButton = screen.getByRole('button', { name: /sign up/i });

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.blur(emailInput);

        fireEvent.change(passwordInput, { target: { value: 'Valid123' } });
        fireEvent.blur(passwordInput);

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(consoleLogMock).toHaveBeenCalledWith('Submitted Data:', {
                email: 'test@example.com',
                password: 'Valid123',
            });
        });
    });
});