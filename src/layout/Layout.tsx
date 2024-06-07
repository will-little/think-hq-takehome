import clsx from "clsx";
import Head from "next/head";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";

import NavBar from "./navbar/NavBar";

// import Favicon from "./Favicon";

const Layout: FC<{
  metaTitle: string;
  metaDescription: string;
  className?: string;
  children?: ReactNode;
  noPopup?: boolean;
  solidNavbar?: boolean;
}> = ({
  metaTitle,
  metaDescription,
  className,
  children,
  solidNavbar = false,
}) => {
  const path = usePathname();
  const canonical = `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}${path}`;
  return (
    <>
      <Head>
        <title>{metaTitle || "Translate Sound"}</title>
        <meta name="description" content={metaDescription} />
        {/* <meta property="og:image" content={Preview.src} /> */}
        <link rel="canonical" href={canonical} />
      </Head>
      {/* <NavBar solid={solidNavbar} /> */}
      <main className={clsx(className, "min-h-screen")}>{children}</main>
    </>
  );
};

export default Layout;
