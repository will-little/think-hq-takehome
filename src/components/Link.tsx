import { clsx } from "clsx";
import NextLink from "next/link";
import React, { CSSProperties, FC, ReactNode } from "react";

const Link: FC<{
  href: string;
  query?: any;
  className?: any;
  style?: CSSProperties;
  props?: any;
  children: ReactNode;
  target?: string;
  newTab?: boolean;
}> = ({ href, query = {}, className, children, target, newTab = false, ...props }) => {
  const tempTarget = target ? target : newTab ? "_blank" : undefined;
  return (
    <NextLink href={{ pathname: href, query }} className={clsx("link", className)} target={tempTarget} {...props}>
      {children}
    </NextLink>
  );
};

export default Link;
