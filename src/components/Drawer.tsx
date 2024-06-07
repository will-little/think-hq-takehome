import { Drawer } from "vaul";

import React, { ReactNode } from "react";

import clsx from "clsx";
import HamburgerIcon from "@layout/mobile-menu/HamburgerIcon";

const NavDrawer = ({ children, solidNavbar }: { children: ReactNode; solidNavbar: boolean }) => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className={clsx("lg:hidden", "pr-3")} asChild>
        <button>
          <HamburgerIcon colour={solidNavbar ? "#4C4541" : undefined} />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={clsx(
            "bg-translate-gray-light",
            "flex flex-col",
            "h-full w-5/6 mt-24",
            "fixed bottom-0 right-0 z-20",
          )}
        >
          <Drawer.Close className={clsx("btn btn-square btn-ghost", "self-end fixed", "m-2")}>
            {/* <button className= onClick={() => setOpen((prev) => !prev)}> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {/* </button> */}
          </Drawer.Close>
          <div className="pt-2">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default NavDrawer;
