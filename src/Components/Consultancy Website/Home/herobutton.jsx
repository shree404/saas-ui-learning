import { ChevronRightIcon, HomeIcon } from "@heroicons/react/outline";

export default function Herobutton() {
  return (
    <>
      <button className="inline-flex aspect-square cursor-pointer items-center justify-center rounded-full border  border-white  p-2 font-semibold text-white shadow-sm hover:border-primary-accent focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white">
      <ChevronRightIcon className="h-5 w-5" />
      </button>
    </>
  );
}
