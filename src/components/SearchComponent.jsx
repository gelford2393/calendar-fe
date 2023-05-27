import React from "react";
import InputComponent from "./InputComponent";
const SearchComponent = (props) => {
    const {onHandleChange, value} = props
  return (
    <div>
      <InputComponent
        id={"searchFilter"}
        name={"searchFilter"}
        onChange={onHandleChange} 
        placeholder={"Search"}
        type={"text"}
        value={value}
      />
    </div>
  );
};

export default SearchComponent;
