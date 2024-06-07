import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageType } from "@images/lib";
import Image from "next/image";
import { useMemo } from "react";

interface LabeledImageLinkProps {
  title: string;
  image: ImageType;
  w: "1/3" | "1/2";
  href: string;
}

export const LabeledImageLink = ({ title, image, w, href }: LabeledImageLinkProps) => {
  const width = useMemo(() => {
    switch (w) {
      case "1/3":
        return "w-full lg:w-1/3";

      case "1/2":
        return "w-full lg:w-1/2";
    }
  }, [w]);

  return (
    <div className={clsx(width, "lg:px-0 py-2", "hover:underline")}>
      <Link href={href}>
        <div className={clsx("flex flex-col items-center justify-center  p-0 pb-4 lg:p-2 lg:pb-0")}>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.01 }} className="w-full relative aspect-video">
            <Image alt="Home page background image" fill style={{ objectFit: "cover" }} src={image} />
          </motion.div>
          <h2 className={clsx("link-text", "pt-2 w-full")}>{title}</h2>
        </div>
      </Link>
    </div>
  );
};
