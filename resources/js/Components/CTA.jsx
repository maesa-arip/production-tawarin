import React from "react";

export default function CTA() {
    return (
        <div className="bg-gray-50">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                    <span className="block">Ready to dive in?</span>
                    <span className="block text-indigo-600">
                        Start your free trial today.
                    </span>
                </h2>
                <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                        >
                            Get started
                        </a>
                    </div>
                    <div className="inline-flex ml-3 rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
