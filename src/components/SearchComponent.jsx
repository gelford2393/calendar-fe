import React from "react";
import InputComponent from "./InputComponent";
const SearchComponent = (props) => {
    const {onHandleChange, value} = props
  return (
    <div className="mx-auto w-80 my-5">
      <InputComponent
        id={"searchFilter"}
        name={"searchFilter"}
        onChange={onHandleChange} 
        placeholder={"  Search by name"}
        type={"text"}
        value={value}
      />
    </div>
  );
};

export default SearchComponent;
