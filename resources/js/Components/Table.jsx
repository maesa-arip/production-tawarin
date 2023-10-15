import React from "react";

const Table = ({ children }) => {
    return (
        <>
            <div className="flex flex-col overflow-x-auto">
                <div className="rounded">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="min-w-full border rounded border-slate-300">
                            <table className="min-w-full border-separate rounded ">
                                {children}
                            </table>
                        </div>
                        {/* Pagination */}
                    </div>
                </div>
            </div>
        </>
    );
};
const Thead = ({ children }) => {
    return (
        <>
            <thead className="bg-gray-50">{children}</thead>
        </>
    );
};
const Th = ({ children, onClick, className = "text-left" }) => {
    return (
        <>
            <th
                scope="col"
                className={
                    "px-6 py-3 text-xs font-semibold tracking-normal text-gray-800 uppercase border rounded border-slate-300 " +
                    className
                }
            >
                <div
                    className="flex items-center cursor-pointer gap-x-1"
                    onClick={onClick}
                >
                    {children}
                </div>
            </th>
        </>
    );
};
const Tbody = ({ children }) => {
    return (
        <>
            <tbody className="bg-white divide-y divide-gray-200">
                {children}
            </tbody>
        </>
    );
};
const Td = ({ children, className = "" }) => {
    return (
        <>
            <td
                className={
                    "px-6 py-4 text-sm font-normal tracking-normal whitespace-nowrap border border-slate-300 rounded " +
                    className
                }
            >
                {children}
            </td>
        </>
    );
};
const Tr = ({ children }) => {
    return <tr>{children}</tr>;
};
function Empty({ colSpan, message = 'The item is empty' }) {
    return (
        <tr>
            <td colSpan={colSpan}>
                <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <div className="mt-5">
                        {message}
                    </div>
                    </div>
                </div>
            </td>
        </tr>
    );
}

Table.Thead = Thead;
Table.Th = Th;
Table.Tbody = Tbody;
Table.Td = Td;
Table.Tr = Tr;
Table.Empty = Empty;

export default Table;
