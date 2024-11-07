import { Button, styled } from "@mui/material";
import { getMessageColor } from "./utils";

export const PageContainer = styled('section')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    background: '#e7f1fd',
}));

export const Title = styled('h1')(({ theme }) => ({
    fontSize: 28,
    color: '#4A4E71',
    fontWeight: 700,
    marginBottom: theme.spacing(5),
}));

export const StyledForm = styled('form')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 20,
});

export const InputWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

export const StyledButton = styled(Button)(({ theme }) => ({
    width: 240,
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 700,
    padding: theme.spacing(2, 4),
    background: 'linear-gradient(110.46deg, #70C3FF 12.27%, #4B65FF 93.92%)',
    lineHeight: '14px',
    marginTop: theme.spacing(2.5),
}));

export const ErrorMessage = styled('span')(({ theme }) => ({
    fontSize: '13px',
    color: 'red',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
}));

export const MessageWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginTop: theme.spacing(2.5),
    marginLeft: theme.spacing(2),
}));

export const Message = styled('span')<{ hasError?: boolean, hasChanged?: boolean  }>
(({ theme, hasError, hasChanged }) => ({
    fontSize: '13px',
    color: getMessageColor(hasError, hasChanged),
    marginBottom: theme.spacing(0.5),
}));
