import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Pagination({ meta }) {
    return (
        <ul className="flex items-center mt-2 gap-x-1">
            {meta.links.map((item, index) => (
                <Link
                    key={index}
                    as="button"
                    disabled={item.url == null ? true : false}
                    href={item.url}
                    className={`${item.url == null ? "text-gray-500" : ""} ${item.active==true ? "bg-blue-50 text-blue-600 ring-blue-500/10 inline-flex items-center rounded-lg font-medium ring-1 ring-inset" : "bg-white border"} w-12 h-9 rounded-lg flex items-center justify-center`}
                >
                    {item.label}
                </Link>
            ))}
        </ul>
    );
}
