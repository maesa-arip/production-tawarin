import { Link } from "@inertiajs/inertia-react";

export default function ThirdButtonSmallNoLink({ type = 'submit', className = '',href, processing, children, onClick, id,name, color ='tawarin' }) {
    const colorVariants = {
        blue: 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100 focus:ring-blue-100',
        red: 'bg-red-50 text-red-500 hover:bg-red-100 focus:bg-red-100 active:bg-red-100 focus:ring-red-100',
        yellow: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:bg-yellow-100 active:bg-yellow-100 focus:ring-yellow-100',
        amber: 'bg-amber-50 text-amber-500 hover:bg-amber-100 focus:bg-amber-100 active:bg-amber-100 focus:ring-amber-100',
        teal: 'bg-teal-50 text-teal-500 hover:bg-teal-100 focus:bg-teal-100 active:bg-teal-100 focus:ring-teal-100',
        emerald: 'bg-emerald-50 text-emerald-500 hover:bg-emerald-100 focus:bg-emerald-100 active:bg-emerald-100 focus:ring-emerald-100',
        cyan: 'bg-cyan-50 text-cyan-500 hover:bg-cyan-100 focus:bg-cyan-100 active:bg-cyan-100 focus:ring-cyan-100',
        sky: 'bg-sky-50 text-sky-500 hover:bg-sky-100 focus:bg-sky-100 active:bg-sky-100 focus:ring-sky-100',
        gray: 'bg-gray-50 text-gray-500 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 focus:ring-gray-100',
        tawarin: 'bg-amber-500 text-white hover:bg-amber-500 focus:bg-amber-600 active:bg-amber-600 focus:ring-amber-600',
        primary: 'inline-flex justify-center w-full mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm',
        secondary: 'inline-flex items-center bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 false ',
      }
    return (
        <button
            type={type}
            onClick={onClick}
            href={href}
            id={id}
            name={name}
            className={ 
                `${colorVariants[color]} inline-flex items-center px-2 py-1 text-xs border border-transparent rounded-md font-semibold uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}