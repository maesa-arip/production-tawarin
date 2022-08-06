import clsx from 'clsx';
import React from 'react';

export default function Button({ type = 'submit', className = '',color='blue', processing, children, ...props }) {
    return (
        <button
        {...props}
            type={type}
            className={clsx(processing && 'opacity-25',(`w-full inline-flex justify-center items-center rounded-md border border-transparent bg-${color}-100 px-4 py-2 text-sm font-medium text-${color}-900 hover:bg-${color}-200 active:bg-${color}-300 transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm`))}
            disabled={processing}
        >
            {children}
        </button>
    );
}


// export default function Button({ type = 'submit', className = '', processing, children, ...props }) {
//     return (
//         <button
//         {...props}
//             type={type}
//             className={clsx(processing && 'opacity-25',className,'inline-flex justify-center items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-sm text-white active:bg-gray-900 transition ease-in-out duration-150')}
//             disabled={processing}
//         >
//             {children}
//         </button>
//     );
// }
