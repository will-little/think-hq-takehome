import Link from "next/link";
import React from "react";

export interface Breadcrumb {
  title: string;
  href?: string;
}

interface Breadcrumbs {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: Breadcrumbs) => {
  return (
    <div className="max-w-sm breadcrumbs link-text pb-0">
      <ul>
        {breadcrumbs.map(({ href, title }, index) => (
          <li className="pb-0" key={index}>
            {href ? <Link href={href}>{title}</Link> : <p className="font-semibold">{title}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
