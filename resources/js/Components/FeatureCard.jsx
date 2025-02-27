import { numberFormat } from "@/Libs/helper";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function FeatureCard({ balance, bonus, referral, feewithdraw }) {
    const { auth, permissions, requestTopUp, requestWithdraw, customer_count } =
        usePage().props;
    const permission_name = permissions
        ? permissions.map((permission) => permission.name)
        : "null";
    return (
        <div className="flex flex-col px-2 pb-6 mt-4 bg-white border shadow-lg rounded-xl ">
            <h2 className="mb-4 text-2xl font-bold">{/* Feature Cards */}</h2>
            <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex items-start p-4 bg-white border rounded-xl">
                    <div className="flex items-center justify-center w-12 h-12 border border-blue-100 rounded-full bg-blue-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-blue-400 icon icon-tabler icon-tabler-brand-cashapp"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <p className="mt-3 text-xs font-semibold">
                            Rp {numberFormat(balance)} Saldo
                        </p>
                        {/* <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p> */}
                    </div>
                </div>
                <div className="flex items-start p-4 bg-white border rounded-xl">
                    <div className="flex items-center justify-center w-12 h-12 border border-orange-100 rounded-full bg-orange-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-orange-400 icon icon-tabler icon-tabler-cash"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                            <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h2 className="mt-3 text-xs font-semibold">
                            Rp {numberFormat(bonus)} Bonus
                        </h2>
                        {/* <p className="mt-2 text-sm text-gray-500">Last checked 3 days ago</p> */}
                    </div>
                </div>
                <div className="flex items-start p-4 bg-white border rounded-xl">
                    <div className="flex items-center justify-center w-12 h-12 border border-red-100 rounded-full bg-red-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-400 icon icon-tabler icon-tabler-share-3"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h2 className="mt-3 text-xs font-semibold">
                            {referral} Referal
                        </h2>
                        {/* <p className="mt-2 text-sm text-gray-500">Last authored 1 day ago</p> */}
                    </div>
                </div>
                {permission_name.indexOf("lihat menu admin saldo") > -1 && (
                    <>
                        <div className="flex items-start p-4 bg-white border rounded-xl">
                            <div className="flex items-center justify-center w-12 h-12 border border-indigo-100 rounded-full bg-indigo-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-indigo-400 icon icon-tabler icon-tabler-building-bank"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M3 21l18 0" />
                                    <path d="M3 10l18 0" />
                                    <path d="M5 6l7 -3l7 3" />
                                    <path d="M4 10l0 11" />
                                    <path d="M20 10l0 11" />
                                    <path d="M8 14l0 3" />
                                    <path d="M12 14l0 3" />
                                    <path d="M16 14l0 3" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <h2 className="mt-3 text-xs font-semibold">
                                    Rp {numberFormat(feewithdraw)} Fee Withdraw
                                </h2>
                                {/* <p className="mt-2 text-sm text-gray-500">Last commented 8 days ago</p> */}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
