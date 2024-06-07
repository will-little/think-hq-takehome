import { clsx } from "clsx";
import NextLink from "next/link";
import React, { FC, ReactNode } from "react";

import ExternalLinkIcon from "src/images/ExternalLinkIcon";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Container from "@components/Container";

import MobileMenuDrawer from "@layout/mobile-menu/MobileMenuDrawer";
import Link from "next/link";
import TranslateLogo from "src/images/TransalteLogo";
import { text } from "stream/consumers";

const NavLink: FC<{ href: string; newTab?: boolean; className?: string; children: ReactNode }> = ({
  href,
  newTab,
  children,
}) => {
  return (
    <NavigationMenu.Item>
      <NextLink href={href} passHref target={newTab ? "_blank" : undefined}>
        <div className={clsx("navbar-link")}>{children}</div>
      </NextLink>
    </NavigationMenu.Item>
  );
};

const DropdownListItem: FC<{ href: string; newTab?: boolean; children: ReactNode }> = ({
  href,
  newTab = false,
  children,
}) => {
  return (
    <div className={clsx()}>
      <NavLink href={href} newTab={newTab}>
        <div
          className={clsx(
            "px-8 py-4",
            "text-translate-dark",
            "bg-opacity-0 hover:bg-opacity-10",
            "flex items-center gap-2",
          )}
        >
          {children} {newTab && <ExternalLinkIcon size={16} />}
        </div>
      </NavLink>
    </div>
  );
};

const NavBar = ({ solid }: { solid: boolean }) => {
  return (
    <nav
      className={clsx(
        "w-full",
        "z-20",
        solid ? "bg-transparent relative" : "bg-gradient-to-b from-translate-gray-dark to-transparent fixed",
        "navbar-link",
      )}
    >
      <Container>
        <div className={clsx("flex items-center justify-between", "py-2 lg:px-0")}>
          <Link href="/">
            <TranslateLogo size={60} fill={solid ? "#4C4541" : undefined} />
          </Link>
          <NavigationMenu.Root>
            <NavigationMenu.List className={clsx("flex items-center gap-8 2xl:gap-14", "hidden lg:flex")}>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className={clsx("flex items-center gap-1 ")}>
                  <NavLink href={"/products"}>
                    <p className={clsx("navbar-link", solid && "text-translate-gray-dark hover:text-translate-gray")}>
                      PRODUCTS
                    </p>
                  </NavLink>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className={clsx("drop-shadow-md")}>
                  <NavigationMenu.List className={clsx("navbar-dropdown")}>
                    <DropdownListItem href={"/products/hifi"}>Hifi</DropdownListItem>
                    <DropdownListItem href={"/products/studio"}>Studio Monitors</DropdownListItem>
                    <DropdownListItem href={"/products/PA"}>PA</DropdownListItem>
                    <DropdownListItem href={"/products/acoustics"}>Acoustics/treatment</DropdownListItem>
                  </NavigationMenu.List>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavLink href={"/products"}>
                <p className={clsx("navbar-link", solid && "text-translate-gray-dark hover:text-translate-gray")}>
                  SERVICES
                </p>
              </NavLink>
              <NavLink href={"/about"}>
                <p className={clsx("navbar-link", solid && "text-translate-gray-dark hover:text-translate-gray")}>
                  ABOUT US
                </p>
              </NavLink>
              <NavLink href={"/contact-us"}>
                <p className={clsx("navbar-link", solid && "text-translate-gray-dark hover:text-translate-gray")}>
                  {" "}
                  CONTACT
                </p>
              </NavLink>

              <NavigationMenu.Indicator />
            </NavigationMenu.List>

            <NavigationMenu.Viewport />
          </NavigationMenu.Root>

          <MobileMenuDrawer solidNavbar={solid} />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
