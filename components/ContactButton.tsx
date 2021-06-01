/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ReactNode, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export default function ContactButton({ children, className } : {children: ReactNode, className: string}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={open}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
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
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <button
                    onClick={() => setOpen(false)}
                    className=" flex items-center right-3 top-3 absolute rounded-full hover:bg-gray-100"
                  >
                    <XIcon
                      className="h-6 w-6 text-gray-500 "
                      aria-hidden="true"
                    />
                  </button>
                  <div className=" text-center ">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
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
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        09.09.09.09.09
                      </h3>
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
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => {
                      setOpen(false);
                      window.open("https://calendly.com/bocageair", "_blank");
                    }}
                  >
                    Prenez rendez-vous
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 text-center">ou</p>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:pablo@bocageairlines.fr"
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 border-gray-300 text-base font-medium text-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Envoyez-nous un email
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
