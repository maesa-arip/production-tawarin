import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextAreaInput(
    { type = 'text', rows = 3 ,  name, id, value, className, placeholder, autoComplete, required, readOnly, isFocused, handleChange },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start resize">
            <textarea
                type={type}
                name={name}
                rows={rows}
                id={id}
                placeholder={placeholder}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                readOnly={readOnly}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
});
