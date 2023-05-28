import React from "react";

const InputComponent = (props) => {
  const { title, onChange, id, name, type, value, placeholder, required } = props;

  return (
    <div className="mt-2">
      {title && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
      )}
      <div className="mt-2">
        <input
          className={`bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal transition duration-300`}
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          defaultValue={value}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputComponent;
