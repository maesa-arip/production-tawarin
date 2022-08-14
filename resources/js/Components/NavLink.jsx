import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import clsx from 'clsx';

export default function NavLink({ href, children,className,...props }) {
    return (
        <Link
            href={href}
            {...props}
            className={clsx(
                className,
                usePage().url == href && 'font-semibold text-black','text-base font-medium text-gray-500 hover:text-gray-900')}
                
        >
            {children}
        </Link>
    );
}
