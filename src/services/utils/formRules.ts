import * as yup from 'yup';
export const schema = yup
  .object({
    email: yup
      .string()
      .required('Email is required')
      .email('Email is not valid'),
    password: yup.string().required('Password is required'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Confirm password must match'),
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
  })
  .required();
export const loginSchema = schema.pick(['email', 'password']);
export const forgotSchema = schema.pick(['email']);

export type LoginSchema = yup.InferType<typeof loginSchema>;
export type ForgotSchema = yup.InferType<typeof forgotSchema>;
export type AuthenticationSchema = yup.InferType<typeof schema>;
