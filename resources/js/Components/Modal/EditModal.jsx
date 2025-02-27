import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function EditModal({title,children, isOpenEditDialog,setIsOpenEditDialog, size='max-w-4xl'}) {
  return (
    <div>
      <Transition  appear show={isOpenEditDialog} as={Fragment}>
        <Dialog as="div" className="relative z-10" open={isOpenEditDialog} onClose={()=> setIsOpenEditDialog(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all ${size}`}>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    {children}
                    {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-right text-pink-900 bg-pink-100 border border-transparent rounded-md hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                      onClick={()=> setIsOpenEditDialog(false)}
                    >
                      Close
                    </button>
                  </div> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
