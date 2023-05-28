import React from "react";
import InputComponent from "./InputComponent";
const SearchComponent = (props) => {
    const {onHandleChange, value} = props
  return (
    <div className="mx-auto w-80 my-5 ">
      <InputComponent
        id={"searchFilter"}
        name={"searchFilter"}
        onChange={onHandleChange} 
        placeholder={"  Search by name"}
        type={"text"}
        value={value}
        className={'bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal transition duration-300'}
      />
    </div>
  );
};

export default SearchComponent;
