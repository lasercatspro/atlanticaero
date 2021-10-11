import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  XIcon,
  MenuIcon,
  ChevronDownIcon
} from "@heroicons/react/outline";
import ContactButton from "./ContactButton";
import { navigationMain, navigationSecond } from '../utils/index';


const NavBar = () => {
  return (
    <Popover style={{ zIndex: 100 }} className="sticky top-0 bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="flex items-center justify-between py-3 lg:justify-start lg:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a className="text-xl font-black uppercase" href="/">
                  Bocage AirLines
                  {/* <span className="sr-only">Workflow</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  /> */}
                </a>
              </div>
              <div className="-my-2 -mr-2 lg:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <ul className="hidden space-x-6 lg:flex">
                {navigationMain.map(item => <li><a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a></li>
                )}
                <Popover.Group as="li" className="flex">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className="text-gray-500 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span>Découvrir</span>
                          <ChevronDownIcon
                            className={`${open} ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            `}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 px-2 mt-3 transform -translate-x-1/2 w-44 left-1/2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                                {navigationSecond.map((item) => (
                                  <a key={item.name} href={item.href} className="block p-3 -m-3 text-base font-medium text-gray-500 rounded-md hover:text-gray-900">
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
              </ul>

              <div className="items-center justify-end hidden lg:flex lg:flex-1 lg:w-0">
                <ContactButton className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700">
                  Prenez votre envol
                </ContactButton>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform lg:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <a className="text-lg font-black uppercase" href="/">
                        Bocage AirLines
                        {/*<img
                            className="w-auto h-8"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                          /> */}
                      </a>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                    {navigationMain.map(item => <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>)}
                    {navigationSecond.map(item => <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>)}



                  </div>
                  {/* <ContactButton className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700">
                    Volez
                </ContactButton> */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )
      }
    </Popover >
  );
};

export default NavBar;
