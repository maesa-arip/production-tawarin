import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';
import React from 'react'

export default function Edit({permissions,role}) {
  return (
    <>
    <Head title="Assign Permission to Role" />
    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                        {role.name.toUpperCase()}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Silakan pilih apa saja yang bisa dilakukan oleh {role.name.toUpperCase()}.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                        {permissions.map(
                                            (permission, i) => (
                                                <div
                                                    key={
                                                        permission.id
                                                    }
                                                    className="flex items-center justify-between px-3 py-4 rounded-md shadow"
                                                >
                                                    {permission.name}
                                                    <label
                                                        htmlFor={
                                                            permission.slug
                                                        }
                                                        className="relative inline-flex items-center cursor-pointer"
                                                    >
                                                        <input
                                                            key={
                                                                permission.id
                                                            }
                                                            // onChange={onChange}
                                                            type="checkbox"
                                                            id={
                                                                permission.slug
                                                            }
                                                            name={permission.slug}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-blue-600  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500 peer-after:ring-indigo-500" />
                                                    </label>
                                                </div>
                                            )
                                        )}
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
  )
}
Edit.layout = (page) => <App children={page} />;
