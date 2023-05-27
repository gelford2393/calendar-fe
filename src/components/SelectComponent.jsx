import React from "react";

const SelectComponent = (props) => {
  const { title, id, name, options, setAppointmentStatus, value } = props;
  const handleOnChange = (e) => {
    setAppointmentStatus(e.target.value);
  };
  return (
    <div className="sm:col-span-3 mt-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <select
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          id={id}
          name={name}
          onChange={handleOnChange}
          defaultValue={value}
        >
          {options.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;
