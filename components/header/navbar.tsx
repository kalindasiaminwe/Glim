import { Disclosure, DisclosureButton } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { myFont } from "../ui/fonts";

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-white py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-500 hover:bg-gray-100 hover:text-[#827166] rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#827166]">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton> */}
          </div>

          {/* Centered logo and tagline */}
          <div className="flex-1 flex justify-center items-center">
            <div className="text-center">
              <h1
                className={`${myFont.className} text-3xl sm:text-5xl font-bold text-[#827166]`}
              >
                G l i m
              </h1>
              <p className="text-[10px] sm:text-[12px] text-[#a5b1a1] leading-tight">
                Light. Scent. Serenity.
              </p>
            </div>
          </div>

          {/* Right side icons */}
          <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <MagnifyingGlassIcon className="h-6 w-6 text-[#2f3030] hover:text-[#a5b1a1] cursor-pointer" />
            <UserIcon className="h-6 w-6 text-[#2f3030] hover:text-[#a5b1a1] cursor-pointer" />
            <ShoppingCartIcon className="h-6 w-6 text-[#2f3030] hover:text-[#a5b1a1] cursor-pointer" />
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
