import React from 'react';

export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="text-indigo-600 border-gray-300 rounded shadow-sm focus:ring-indigo-500 "
            onChange={(e) => handleChange(e)}
        />
    );
}
