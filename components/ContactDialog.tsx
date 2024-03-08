/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Social from "./Social";
import { AppContext } from '../utils/appContext'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function ContactDialog({ setIsOpen, isOpen }: Props) {

  const ctxProps = useContext(AppContext);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={setIsOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute flex items-center rounded-full right-3 top-3 hover:bg-gray-100"
                >
                  <XIcon
                    className="w-6 h-6 text-gray-500 "
                    aria-hidden="true"
                  />
                </button>
                <div className="text-center ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Prenons contact !
                  </Dialog.Title>
                </div>{" "}
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Vous pouvez nous appeler dès maintenant à ce numéro :
                    </p>
                  </div>
                  <div className="mt-2">
                    <a
                      href="tel:06 34 81 33 92"
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-700 border border-transparent border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      06 34 81 33 92
                    </a>
                  </div>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Nous sommes indisponibles ?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => {
                    setIsOpen(false);
                    window.open("https://calendly.com/bocageair", "_blank");
                  }}
                >
                  Prenez rendez-vous
                </button>
              </div>
              <div className="mt-4">
                <a
                  href="mailto:pablo@bocageairlines.fr"
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-700 border border-transparent border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Écrivez-nous
                </a>
              </div>
              {/* <div className="mt-4">
                <p className="text-sm text-center text-gray-500">suivez-moi</p>
              </div> */}
              {ctxProps?.socials && <ul className="flex justify-center mt-8 space-x-5">
                {ctxProps?.socials?.map(item => <li><Social social={item.social} link={item.link} />
                </li>)}
              </ul>}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

