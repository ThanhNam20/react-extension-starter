import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
  type: React.HTMLInputTypeAttribute;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  autoComplete?: string;
}

const Input = ({
  autoComplete,
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
}: Props) => {
  return (
    <div className={className}>
      <input
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className="form-control shadow-none rounded-0"
        {...register(name, rules)}
      />
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default Input;
