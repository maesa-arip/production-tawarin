import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function ShowResult({ plan, data , plan_master}) {
  console.log(plan_master);
    return (
        <div>
            <Head title="Upload Hasil" />
            <div className="bg-white">
                <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-4 mx-auto gap-y-8 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                  {plan_master.map(
                    (master, index) => 
                    {data.master.slug ? (
                      <div className="mb-6 bg-white rounded-lg shadow">
                          <div className="px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7">
                              <h2 className="mb-4 text-xl font-semibold tracking-tight text-gray-900">
                                  {master.name}
                              </h2>
                              <div className="grid grid-cols-6 col-span-2 gap-2 ">
                                  {data.master.slug.map(
                                      (result, index) =>
                                          index < 2 && (
                                              <div
                                                  key={result.id}
                                                  className="shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem]"
                                              >
                                                  <img
                                                      className="object-cover w-full h-full "
                                                      src={`/storage/${result.id}/${result.file_name}`}
                                                      alt={index}
                                                  />
                                              </div>
                                          )
                                  )}
                                  {data.master.slug.map(
                                      (result, index) =>
                                          index > 1 &&
                                          index < 6 && (
                                              <div
                                                  key={result.id}
                                                  className="shadow overflow-hidden rounded-xl col-span-2 max-h-[10rem]"
                                              >
                                                  <img
                                                      className="object-cover w-full h-full "
                                                      src={`/storage/${result.id}/${result.file_name}`}
                                                      alt={index}
                                                  />
                                              </div>
                                          )
                                  )}
                              </div>
                          </div>
                          <div className="px-2 mx-3 mb-6 text-sm text-gray-500">
                              Ini adalah hasil {master.name} dari
                              konsultan
                          </div>
                      </div>
                  ) : (
                      ""
                  )}
                  )}
                    
                </div>
            </div>
        </div>
    );
}
ShowResult.layout = (page) => <App children={page}></App>;
