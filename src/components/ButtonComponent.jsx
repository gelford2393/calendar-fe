import React from "react";

const ButtonComponent = (props) => {
  const { type, onClick, className, children, color } = props;
  return (
    <button
      type={type}
      className={`${className} justify-center px-3 py-1.5 text-sm font-semibold rounded-md bg-${color}-600 leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
