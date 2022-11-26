import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { InertiaLink } from "@inertiajs/inertia-react";
import clsx from "clsx";
import { Fragment } from "react";

function Link({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <InertiaLink
                    {...props}
                    className={clsx(
                        active && "font-semibold text-gray-900",
                        "flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                    )}
                    href={href}
                >
                    {children}
                </InertiaLink>
            )}
        </Menu.Item>
    );
}
function DropdownMenu({ buttonClassName = "", label, children }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button
                    className={clsx(
                        open
                            ? "text-gray-900"
                            : "text-gray-500",
                        "group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                        // className={clsx(
                        //     buttonClassName,
                        //     "flex items-center gap-x-2 text-base font-medium text-gray-500 hover:text-gray-900"
                        // )}
                    >
                        {label}
                        <ChevronDownIcon
                            className={clsx(
                                "h-5 w-5 transition duration-500",
                                open && "rotate-180"
                            )}
                            aria-hidden="true"
                        />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Menu.Items className="absolute z-20 w-full px-2 mt-3 -ml-4 transform md:w-screen md:max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                                    {children}
                                </div>
                            </div>
                        </Menu.Items>
                        {/* <Menu.Items className="absolute right-0 z-50 w-64 py-1 mt-2 overflow-hidden bg-white border rounded-lg shadow-sm top-full">
                            {children}
                        </Menu.Items> */}
                    </Transition>
                </>
            )}
        </Menu>
    );
}

function Divider() {
    return <div className="block w-full h-px my-1 bg-gray-200" />;
}

DropdownMenu.Link = Link;
DropdownMenu.Divider = Divider;
export default DropdownMenu;
