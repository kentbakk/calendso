import { ChatAltIcon } from "@heroicons/react/solid";
import { useIntercom } from "react-use-intercom";

import classNames from "@lib/classNames";

import { DropdownMenuItem } from "@components/ui/Dropdown";

const HelpMenuItem = () => {
  const { boot, show } = useIntercom();
  return (
    <DropdownMenuItem>
      <button
        onClick={() => {
          boot();
          show();
        }}
        className="flex w-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-gray-100 hover:text-gray-900">
        <ChatAltIcon
          className={classNames(
            "text-neutral-400 group-hover:text-neutral-500",
            "mr-2 flex-shrink-0 h-5 w-5"
          )}
          aria-hidden="true"
        />
        Help
      </button>
    </DropdownMenuItem>
  );
};

export default HelpMenuItem;
