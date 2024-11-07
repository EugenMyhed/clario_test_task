import { PASSWORD_MIN_LENGTH } from "../../common/constants";

export const validatePassword = (password: string = '') => {
    const hasMinLength = password.length >= PASSWORD_MIN_LENGTH;
    const hasSpaces = /\s/.test(password);
    const hasMixedCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    return {
        hasMinLength,
        hasSpaces,
        hasMixedCase,
        hasDigit,
    };
};

export const getMessageColor = (hasError?: boolean, hasChanged?: boolean) => {
    if (!hasChanged) {
        return '#4A4E71';
    }

    return hasError ? '#FF8080' : '#27B274B2';
}
