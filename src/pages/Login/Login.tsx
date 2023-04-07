import React from 'react';
import { LoginSchema, schema } from '../../services/utils/formRules';
import Input from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FacebookIcon, GoogleIcon } from '../../assets';
import { Link } from 'react-chrome-extension-router';
import ForgotPassword from '../ForgotPassword';
import Register from '../Register';

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: yupResolver(schema),
  });
  // const rules = getRules(getValues);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <div className="login-form bg-white px-3 py-2 shadow-sm">
        <div className="col-12">
          <div className="text-center">
            <h1 className="title1 mb-0">Join Rebates</h1>
            <p>Find and share great deals</p>
          </div>
          <div className="px-md-3 pt-1 signupwithsocial">
            <a
              className="button btn-first bg-transparent d-block border-fb fw-bold"
              href="/"
              target="_blank"
            >
              <span className="social-icon-login">
                <img src={FacebookIcon} alt="facebook" />
              </span>
              Continue with Facebook
            </a>
            <a
              className="button btn-first bg-transparent d-block border-google mt-2 fw-bold"
              href="/"
              target="_blank"
            >
              <span className="social-icon-login">
                <img src={GoogleIcon} alt="google" />
              </span>
              Continue with Google
            </a>
            <div className="text-center my-1 or-block position-relative">
              <h3 className="title2 bg-white d-inline-block mb-0 color-first fw-bold">
                OR
              </h3>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="px-md-3 needs-signup-validation"
          >
            <Input
              className="mt-2 mb-3"
              name="email"
              placeholder="Email"
              register={register}
              errorMessage={errors.email?.message}
              type="email"
            />
            <Input
              className="mt-2 mb-3"
              name="password"
              placeholder="Password"
              register={register}
              errorMessage={errors.password?.message}
              type="password"
            />
            <div className="mb-2">
              <button
                type="submit"
                className="btn bg-color-second text-white d-block w-100 rounded-0"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="text-center mb-0 px-3">
            <p className="mb-0">
              Don't have an account?
              <Link component={Register} className="color-second">
                <b>Sign Up</b>
              </Link>
            </p>
            <p className="mb-0">
              <Link component={ForgotPassword}>
                <b>Forget Password</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
