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
                    `border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-600 focus:ring-sky-500 dark:focus:ring-sky-600 rounded-md shadow-sm ` +
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
  