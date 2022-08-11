import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const choose = [
  { id: 0, name: 'Ketik atau Klik' },
]

export default function Comboboxpage({plan_categories}) {
  const [selected, setSelected] = useState(plan_categories[0])
  const [query, setQuery] = useState('')

  const filteredplan_categories =
    query === ''
      ? plan_categories
      : plan_categories.filter((plan_category) =>
          plan_category.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
      <Combobox  as={'div'} className='relative w-full' value={selected} onChange={setSelected}>
          <div className="flex justify-between w-full px-3 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-sm leading-3 text-gray-900 border-none focus:ring-0"
              displayValue={(plan_category) => plan_category.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredplan_categories.length === 0 && query !== '' ? (
                <div className="relative px-4 py-3 text-gray-700 cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                filteredplan_categories.map((plan_categories) => (
                  <Combobox.Option
                    key={plan_categories.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={plan_categories}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {plan_categories.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
      </Combobox>
  )
}
