import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)<{ isValid: boolean }>(({ theme, isValid }) => ({
    '& .MuiOutlinedInput-root': {
        height: 48,
        width: 315,
        borderRadius: '10px',
        fontSize: '16px',
        opacity: 1,
        background: isValid ? '#DFF2D8' : 'white',
        color: isValid ? '#4CAF50' : 'inherit',

        '&:hover': {
            borderColor: isValid ? '#4CAF50' : 'black',
        },

        '&.Mui-focused': {
            background: 'white',
            color: 'inherit',
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#151D51',
            },
        },

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #151D51',
        },

        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            border: 0,
        },

        '&.Mui-error': {
            border: '2px solid #FF8080 !important',
            backgroundColor: '#FDEFEE !important',
            color: '#FF8080 !important',
        },
    },

    '& .MuiOutlinedInput-notchedOutline': {
        border: isValid ? '1px solid #4CAF50' : '0',
    },

    '& .MuiOutlinedInput-input': {
        paddingLeft: theme.spacing(2),
        color: isValid ? '#4CAF50' : 'inherit',

        '&:focus': {
            color: 'black',
        },

        '&::placeholder': {
            color: '#6F91BC',
            opacity: 1,
        },

        '&:focus::placeholder': {
            color: '#4A4E71',
            opacity: 1,
        },
    },

    '& .MuiFormHelperText-root.Mui-error': {
        color: theme.palette.error.main,
    },
}));
