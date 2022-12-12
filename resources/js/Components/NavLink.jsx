import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import clsx from 'clsx';

export default function NavLink({ href, active, children,className,...props }) {
    return (
        <Link
            href={href}
            {...props}
            className={clsx(
                className,
                active || usePage().url == href
                ? 'inline-flex items-center px-1 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                : 'inline-flex items-center px-1 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
               )}
                
        >
            {children}
        </Link>
    );
}
