"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Shop", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

export default function PrimaryNav() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#827166]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Desktop menu */}
              <div className="hidden sm:flex sm:space-x-12 mx-auto">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "text-[#2f3030] font-semibold after:content-[''] after:block after:mx-auto after:mt-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#a5b1a1]"
                        : "text-[#2f3030] hover:text-[#a5b1a1]",
                      "text-base px-3 py-2"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-[#2f3030] font-semibold"
                      : "text-[#2f3030] hover:text-[#a5b1a1]",
                    "block px-3 py-2 rounded-md text-base"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
