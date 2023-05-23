import React, { useState } from "react";

const AutocompleteDropdown = ({
  options = ["option one", "option two", "option three"],
  onSelect,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedValue, setSeledtedValue] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setInputValue(value);
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setFilteredOptions([]);
    onSelect(option);
  };
  const handleOnBlur = (event) => {
    let current = event.target.value;
    if (current !== selectedValue) {
      onSelect(event);
      setSeledtedValue(current);
    }
  };
  const handleDoubleClick = (event) => {
    setInputValue("");
    setFilteredOptions(options);
  };
  return (
    <div>
      <input
        list="options-selection"
        className="autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onDoubleClick={handleDoubleClick}
        onBlur={handleOnBlur}
        placeholder="Select Country..."
      />
      {filteredOptions.length > 0 && (
        <datalist id="options-selection">
          {filteredOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </datalist>
      )}
    </div>
  );
};

export default AutocompleteDropdown;
