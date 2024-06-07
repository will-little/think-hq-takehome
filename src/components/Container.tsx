import { clsx } from "clsx";
import React, { CSSProperties, FC, ReactNode } from "react";

const Container: FC<{
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: any;
}> = ({ children, className, style, ref }) => {
  return (
    <div ref={ref} className={clsx("px-8 lg:px-20", className)} style={style}>
      {children}
    </div>
  );
};

export default Container;
