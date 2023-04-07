import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { goBack, Link } from 'react-chrome-extension-router';
import { useForm } from 'react-hook-form';
import { ForgotSchema, schema } from '../../services/utils/formRules';
import Input from '../../components/Input';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ForgotSchema>({
    resolver: yupResolver(schema),
  });
  // const rules = getRules(getValues);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <div className="forgot-password-form bg-white p-3 shadow-sm">
        <div className="col-12">
          <div className="text-center mb-3">
            <h2 className="title1">Recover Email Id</h2>
          </div>
          <form
            onSubmit={onSubmit}
            className="needs-forgotpass-validation px-md-3"
          >
            <Input
              className="mt-2 mb-3"
              name="email"
              placeholder="Email"
              register={register}
              errorMessage={errors.email?.message}
              type="email"
            />
            <div className="mb-3">
              <button
                type="submit"
                className="btn bg-color-second text-white d-block w-100 rounded-0"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mb-3 text-center">
            <p>
              <a href="#" onClick={goBack}>
                <b className="secondColor">Back</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
