import React, { FC, useState } from 'react';
import { UseFormRegisterReturn } from "react-hook-form";
import { IconButton } from "@mui/material";
import { InputType } from "../../common/types";
import { HidePasswordIcon, ShowPasswordIcon } from "../../common/icons";
import { StyledTextField } from "./styles";

interface InputFieldProps {
    type: InputType,
    placeholder: string,
    error: boolean,
    isValid: boolean,
    register: UseFormRegisterReturn,
}

export const Input:FC<InputFieldProps> = ({ type, placeholder, error, isValid, register }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPassword = type === InputType.PASSWORD;

  const handleShowPassword = () => {
      setShowPassword(!showPassword);
  }

  return (
      <StyledTextField
          type={isPassword && showPassword ? InputType.TEXT : type}
          placeholder={placeholder}
          error={error}
          isValid={isValid}
          size='small'
          InputProps={{
            endAdornment: isPassword ? (
                <IconButton onClick={handleShowPassword}>
                    {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
                </IconButton>
            ) : null,
          }}
          {...register}
        />
  );
};
