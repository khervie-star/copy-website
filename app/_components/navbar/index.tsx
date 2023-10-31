"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-main">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <a
                    href="#"
                    className="uppercase font-libre font-bold text-[24px] text-black tracking-[4.8px]">
                    Copy Co.
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "" : "",
                          "rounded-md px-3 py-2 font-nunito font-normal text-[12px] text-black uppercase tracking-[2.4px]"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-secondary hover:text-secondary/80 focus:outline-none focus:ring-0">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiMiniXMark
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <HiMenuAlt3
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
