import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import ExternalLinkIcon from "src/images/ExternalLinkIcon";
import Link from "@components/Link";
import NavDrawer from "@components/Drawer";

const MenuLink: FC<{ children: ReactNode; href: string; newTab?: boolean }> = ({ children, href, newTab = false }) => {
  const pathname = usePathname();

  return (
    <div className={clsx("w-full", "flex items-center justify-between")}>
      <Link href={href} newTab={newTab} className={clsx("w-full", "mobilemenu-link")}>
        <div className={clsx("w-full", "p-6", "flex items-center gap-2")}>
          {children}
          {newTab && <ExternalLinkIcon size={18} />}
        </div>
      </Link>
    </div>
  );
};

const MobileMenuDrawer = ({ solidNavbar }: { solidNavbar: boolean }) => {
  const renderItems = () => {
    return (
      <div className={clsx("w-full", "")}>
        <MenuLink href="/products">Products</MenuLink>
        <MenuLink href="/products">Services</MenuLink>
        <MenuLink href="/products">About Us</MenuLink>
        <MenuLink href="/contact-us">Contact</MenuLink>
      </div>
    );
  };

  return (
    <NavDrawer solidNavbar={solidNavbar}>
      <div className={clsx("")}>{renderItems()}</div>
    </NavDrawer>
  );
};

export default MobileMenuDrawer;
