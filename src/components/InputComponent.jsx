import React from "react";

const InputComponent = (props) => {
  const { title, onChange, id, name, type, value } = props;

  return (
    <div className="mt-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          defaultValue={value}
          required
        />
      </div>
    </div>
  );
};

export default InputComponent;
