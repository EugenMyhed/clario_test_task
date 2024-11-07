import React from "react";
import { Input } from "../../components/Input";
import { InputType } from "../../common/types";
import { PASSWORD_MIN_LENGTH } from "../../common/constants";
import {
    ErrorMessage,
    InputWrapper,
    Message,
    MessageWrapper,
    PageContainer,
    StyledButton,
    StyledForm,
    Title
} from "./styles";
import { useSignUpForm } from "./hooks/useSignUpForm";
import { validatePassword } from "./utils";

export const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
        dirtyFields,
        passwordValue,
        isEmailValid,
        isPasswordValid,
    } = useSignUpForm();

    const {
        hasMinLength,
        hasSpaces,
        hasMixedCase,
        hasDigit
    } = validatePassword(passwordValue);

    return (
        <PageContainer>
            <Title>Sign up</Title>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <InputWrapper>
                    <Input
                        placeholder='Email'
                        type={InputType.TEXT}
                        error={!!errors.email}
                        isValid={isEmailValid}
                        register={register('email')}
                    />
                    {errors.email && <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>}
                </InputWrapper>
                <InputWrapper>
                    <Input
                        placeholder='Create your password'
                        type={InputType.PASSWORD}
                        error={!!errors.password}
                        isValid={isPasswordValid}
                        register={register('password')}
                    />
                    <MessageWrapper>
                        <Message
                            hasError={!hasMinLength || hasSpaces}
                            hasChanged={!!dirtyFields.password}
                        >
                            {`${PASSWORD_MIN_LENGTH} characters or more (no spaces)`}
                        </Message>
                        <Message
                            hasError={!hasMixedCase}
                            hasChanged={!!dirtyFields.password}
                        >
                            Uppercase and lowercase letters
                        </Message>
                        <Message hasError={!hasDigit} hasChanged={!!dirtyFields.password}>At least one digit</Message>
                    </MessageWrapper>
                </InputWrapper>
                <StyledButton type='submit' variant='contained'>Sign up</StyledButton>
            </StyledForm>
        </PageContainer>
    );
};
