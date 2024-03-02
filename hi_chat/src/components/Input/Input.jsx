import React, { useState, useRef } from "react";
import "./input.css";

export const Input = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim !== "") {
      onSubmit(inputValue);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="search-input"
          type="text"
          onChange={handleChange}
          placeholder="Search"
        />
      </form>
    </div>
  );
};
