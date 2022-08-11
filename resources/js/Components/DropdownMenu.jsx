import { Menu } from "@headlessui/react";
import { InertiaLink } from "@inertiajs/inertia-react";
import clsx from "clsx";

function Link({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <InertiaLink
                    {...props}
                    className={clsx(
                        active && "bg-gray-100 text-black",
                        "w-full block text-left text-gray-600 py-2 px-3 text-sm"
                    )}
                    href={href}
                >
                    {children}
                </InertiaLink>
            )}
        </Menu.Item>
    );
}
function DropdownMenu({ buttonClassName ='',label, children }) {
    return (
        <Menu className="relative" as="div">
            {({ open }) => (
                <>
                    <Menu.Button className={clsx(buttonClassName,'flex items-center gap-x-2')}>
                        {label}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx('h-5 w-5 transition duration-500', open && 'rotate-180')}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </Menu.Button>

                    <Menu.Items className="absolute right-0 z-50 w-64 py-1 mt-2 overflow-hidden bg-white border rounded-lg shadow-sm top-full">
                        {children}
                    </Menu.Items>
                </>
            )}
        </Menu>
    );
}

function Divider(){
    return <div className="block w-full h-px my-1 bg-gray-200" />
}

DropdownMenu.Link = Link;
DropdownMenu.Divider = Divider;
export default DropdownMenu;
