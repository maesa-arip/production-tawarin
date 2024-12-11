import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInputRadio(
    { type = 'radio', name, id, value,readOnly, className, autoComplete, required, isFocused, onChange },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start w-5 h-5">
            <input
            
                type={type}
                name={name}
                id={id}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-500 h-5 w-5 focus:ring-indigo-500 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                readOnly={readOnly}
                autoComplete={autoComplete}
                required={required}
                onChange={onChange}
            />
        </div>
    );
});
