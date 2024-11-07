import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../signUpSchema';

export interface SignUpFormValues {
    email: string;
    password: string;
}

export const useSignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, dirtyFields },
    } = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: 'onBlur',
    });

    const passwordValue = watch('password');

    const isEmailValid = !!dirtyFields.email && !errors.email;
    const isPasswordValid = !!dirtyFields.password && !errors.password;

    const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
        console.log('Submitted Data:', data);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        dirtyFields,
        passwordValue,
        isEmailValid,
        isPasswordValid,
    };
};
