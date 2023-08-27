import React from 'react'

const CustomInput = (props) => {
  const { type, placeholder, input_id, input_class } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${input_class}`}
        id={input_id}
        placeholder={placeholder}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
  );
};

export default CustomInput