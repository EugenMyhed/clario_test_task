import { validatePassword } from '../utils';

describe('validatePassword', () => {
    it('should return true for all validations when password meets all criteria', () => {
        const result = validatePassword('Password123');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: false,
            hasMixedCase: true,
            hasDigit: true,
        });
    });

    it('should fail `hasMinLength` validation when password is shorter than the minimum length', () => {
        const result = validatePassword('Pw1');
        expect(result).toEqual({
            hasMinLength: false,
            hasSpaces: false,
            hasMixedCase: true,
            hasDigit: true,
        });
    });

    it('should fail `hasMixedCase` validation when password has only lowercase letters', () => {
        const result = validatePassword('password123');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: false,
            hasMixedCase: false,
            hasDigit: true,
        });
    });

    it('should fail `hasMixedCase` validation when password has only uppercase letters', () => {
        const result = validatePassword('PASSWORD123');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: false,
            hasMixedCase: false,
            hasDigit: true,
        });
    });

    it('should fail `hasDigit` validation when password has no digits', () => {
        const result = validatePassword('Password');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: false,
            hasMixedCase: true,
            hasDigit: false,
        });
    });

    it('should fail `hasSpaces` validation when password contains spaces', () => {
        const result = validatePassword('Password 123');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: true,
            hasMixedCase: true,
            hasDigit: true,
        });
    });

    it('should fail all validations when password is empty', () => {
        const result = validatePassword('');
        expect(result).toEqual({
            hasMinLength: false,
            hasSpaces: false,
            hasMixedCase: false,
            hasDigit: false,
        });
    });

    it('should pass `hasMinLength` but fail other validations when password is only numbers', () => {
        const result = validatePassword('12345678');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: false,
            hasMixedCase: false,
            hasDigit: true,
        });
    });

    it('should pass `hasMinLength` and `hasMixedCase`, but fail `hasDigit` when password has no digits', () => {
        const result = validatePassword('Password');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: false,
            hasMixedCase: true,
            hasDigit: false,
        });
    });

    it('should fail `hasMixedCase` and `hasDigit` when password has only lowercase letters and no digits', () => {
        const result = validatePassword('password');
        expect(result).toEqual({
            hasMinLength: true,
            hasSpaces: false,
            hasMixedCase: false,
            hasDigit: false,
        });
    });
});
