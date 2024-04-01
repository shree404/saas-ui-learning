import React from "react";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function StudyinUSAmenu() {
  return (
    <div className="flex items-center">

      <div className="ml-2 relative inline-block text-left">
        <Menu.Button className="inline-flex cursor-pointer items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2  focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white  ">
        Study In USA
        </Menu.Button>

        <div className="absolute z-50 mt-2 w-56 origin-top-right rounded-xl bg-layer-3 py-3 shadow-xl focus:outline-none opacity-0 invisible transition-opacity duration-150">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-muted-1 text-heading" : "text-text"
                  } flex w-full cursor-pointer items-center px-4 py-2 text-sm font-semibold`}
                >
                  USA Student Visa
                </button>
              )}
            </Menu.Item>
          </div>
        </div>
      </div>

      {/* Add CSS to show/hide the Australia Student Visa menu item */}
      <style jsx>{`
        .ml-2:hover .absolute {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
}

export default StudyinUSAmenu;
