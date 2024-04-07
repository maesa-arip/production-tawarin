import React, { useState } from 'react';
function TimeInput() {
    const [selectedTime, setSelectedTime] = useState('');
  
    const handleTimeChange = (event) => {
      setSelectedTime(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="timeInput">Select a time:</label>
        type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300  focus:border-sky-500 focus:ring-sky-500  rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
        <input
          type="time"
          id="timeInput"
          value={selectedTime}
          onChange={handleTimeChange}
        />
        <p>Selected time: {selectedTime}</p>
      </div>
    );
  }
  
  export default TimeInput;
  