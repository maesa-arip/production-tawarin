import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Logo from "../../img/Tawarin.png";

function Footer() {
    return (
        <footer className="relative">
            <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full"
                >
                    <defs>
                        <pattern
                            id=":Rf6:"
                            width={64}
                            height={64}
                            patternUnits="userSpaceOnUse"
                            x="50%"
                        >
                            <path
                                d="M0 128V.5H128"
                                fill="none"
                                stroke="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#:Rf6:)" />
                </svg>
            </div>
            <div className="px-4 mx-auto sm:px-6">
                {/* Top area: Blocks */}
                <div className="grid gap-8 py-8 border-t border-gray-200 sm:grid-cols-12 md:py-12">
                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-3">
                        <div className="mb-2">
                            {/* Logo */}
                            <Link
                                href="/"
                                className="inline-block"
                                aria-label="Cruip"
                            >
                                <img
                                    className="w-8 h-8"
                                    src={Logo}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="text-sm text-gray-600">
                            <Link
                                href="/"
                                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
                            >
                                Terms
                            </Link>{" "}
                            ·{" "}
                            <Link
                                href="/"
                                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* 2nd block */}
                    {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <p className="mb-2 font-medium text-gray-800">Products</p>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Web Studio</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">DynamicBox Flex</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Programming Forms</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Integrations</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Command-line</Link>
              </li>                            
            </ul>
          </div> */}

                    {/* 3rd block */}
                    {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <p className="mb-2 font-medium text-gray-800">Resources</p>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Tutorials & Guides</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Support Center</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Partners</Link>
              </li>
            </ul>
          </div> */}

                    {/* 4th block */}
                    {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <p className="mb-2 font-medium text-gray-800">Company</p>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Home</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">About us</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Company values</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link href='/' className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">Privacy Policy</Link>
              </li>
            </ul>
          </div> */}

                    {/* 5th block */}
                    {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <p className="mb-2 font-medium text-gray-800">Subscribe</p>
            <p className="mb-4 text-sm text-gray-600">Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="w-full px-3 py-2 pr-12 text-sm text-gray-800 rounded form-input" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px my-2 -ml-px bg-gray-300" aria-hidden="true"></span>
                      <svg className="flex-shrink-0 w-3 h-3 mx-3 text-blue-600 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  Success message
                  <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p>
                </div>
              </div>
            </form>
          </div>           */}

                    <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                </svg>
                            </Link>
                        </li>
                        <li className="ml-4">
                            <Link
                                href="/"
                                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                                aria-label="Instagram"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-[5px] icon icon-tabler icon-tabler-brand-instagram" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16.5 7.5l0 .01" />
</svg>
                            </Link>
                        </li>
                        <li className="ml-4">
                            <Link
                                href="/"
                                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                </svg>
                            </Link>
                        </li>
                        <li className="ml-4">
                            <a
                                href="https://api.whatsapp.com/send?phone=08750920304"
                                className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100"
                                aria-label="Whatsapp"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-[6px] font-extrabold icon icon-tabler icon-tabler-brand-whatsapp" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
</svg>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Bottom area */}
                {/* <div className="py-4 border-t border-gray-200 md:flex md:items-center md:justify-between md:py-8"> */}

                {/* Social links */}
                {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <Link href='/' className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href='/' className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href='/' className="flex items-center justify-center text-gray-600 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-900 hover:bg-white-100" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul> */}

                {/* <div className="mr-4 text-sm text-gray-600">Powered by <Link href='/' className="text-blue-600 hover:underline hover:cursor-pointer">Tawarin</Link></div> */}

                {/* </div> */}
            </div>
        </footer>
    );
}

export default Footer;
