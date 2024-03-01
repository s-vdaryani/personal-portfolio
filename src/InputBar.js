import React, { useState } from 'react';

function InputBar() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setInputValue(''); // Clear the input field
    // Future functionality: Store the response
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="How are you?"
        className="text-input"
      />
      <button onClick={handleButtonClick} className="enter-button">Enter</button>
    </div>
  );
}

export default InputBar;
