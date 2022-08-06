import { Link } from "@inertiajs/inertia-react";
import clsx from "clsx";
import React from "react";

export default function Pagination({ marginTop = 'mt-10', meta, links }) {
    return (
        <div className={clsx('flex items-center justify-center gap-2',marginTop)}>
            {meta.links.map((link, i) => (
                <div key={i}>
                    <Link 
                      // preserveScroll
                      key={i} 
                      href={link.url}
                      className={clsx(link.active && 'text-blue-500 w-12 h-9 rounded-lg flex items-center justify-center border bg-white', 'text-black w-12 h-9 rounded-lg flex items-center justify-center border bg-white')}>
                      {link.label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
