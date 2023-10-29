import React, { useState } from 'react';

function Dropdown({ options }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [hover, setHover] = useState(false);

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  }
   const handlerMouseOver = () =>{
    setHover(true);
   }
   const handlerMouseLeave = () =>{
    setHover (false);
   }

  return (
    <div onMouseEnter={handlerMouseOver} onMouseLeave={handlerMouseLeave} >
        <h1  >
        <button>{selectedOption}</button>
        </h1>
       
       {hover && (
        <select value={selectedOption} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
       )}

    
      <h4>Selected Language : {selectedOption}</h4>
    </div>
  );
}

export default Dropdown;