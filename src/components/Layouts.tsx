import { ImageType } from "@images/lib";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

export const LayoutOverview = ({ children }: { children: ReactNode }) => {
  return <p className={clsx("body-text")}>{children}</p>;
};

interface LayoutHalfImageAnnotatedProps {
  img: ImageType;
  alt: string;
  objectPosition?: string;
  children: ReactNode;
  square?: boolean;
  ltr?: boolean;
}

export const LayoutHalfImageAnnotated = ({
  img,
  alt,
  objectPosition,
  children,
  square = false,
  ltr = false,
}: LayoutHalfImageAnnotatedProps) => {
  return (
    <div className={clsx("w-full", `flex flex-col items-center lg:${ltr ? "flex-row-reverse" : "flex-row"} gap-12`)}>
      <div className={clsx(`w-full lg:w-1/2 relative aspect-square lg:${square ? "aspect-sqare" : "aspect-video"}`)}>
        <Image alt={alt} fill style={{ objectFit: "cover", objectPosition }} src={img} />
      </div>
      <div className={clsx("w-1/2")}>{children}</div>
    </div>
  );
};

interface Specification {
  title: string;
  value: string;
}

const LayoutSpec = ({ spec }: { spec: Specification }) => {
  return (
    <div className="w-full lg:w-1/2">
      <h3 className={clsx("text-xl font-medium")}>{spec.title}</h3>
      <p className={clsx("pt-2", "text-lg")}>{spec.value}</p>
      <div className="divider" />
    </div>
  );
};
export const LayoutSpecs = ({ specs }: { specs: Specification[] }) => {
  return (
    <div>
      <h2 className={clsx("subtitle")}>Specifications</h2>
      <div className={clsx("flex flex-wrap", "pt-4")}>
        {specs.map((spec, index) => (
          <LayoutSpec key={index} spec={spec} />
        ))}
      </div>
    </div>
  );
};

interface GalleryItem {
  img: ImageType;
  alt: string;
  objectPosition?: string;
}

export const LayoutGallery = ({ galleryItems }: { galleryItems: GalleryItem[] }) => {
  return (
    <div className={clsx("flex justify-center flex-wrap ")}>
      {galleryItems.map(({ alt, img, objectPosition }, index) => (
        <div className="w-full lg:w-1/3 relative aspect-video  ">
          <Image className="p-2" alt={alt} fill style={{ objectFit: "cover", objectPosition }} src={img} />
        </div>
      ))}
    </div>
  );
};
