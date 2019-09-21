import React from 'react';
import './input.css';

const Input = props => {
  const {
    type,
    name,
    onChange,
    value,
    placeholder,
    className,
    maxLength,
    minLength,
    disabled
  } = props;

  return (
    <div>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={className}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
      />
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
  minLength: 0,
  maxLength: 20,
  type: 'text',
  className: 'input'
};

export default Input;
