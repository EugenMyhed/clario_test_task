import { z } from 'zod';
import { PASSWORD_MIN_LENGTH } from "../../common/constants";

export const signUpSchema = z.object({
  email: z
      .string()
      .email('Invalid email'),
  password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
});
