import Container from "@components/Container";
import clsx from "clsx";
import CanvasWrapper from "src/three/Canvas";

const HomePage = () => {
  return (
    <>
      <div className={clsx("px-8", "z-10", "relative")}>
        <div
          className={clsx(
            "pt-[10.875rem] w-3/4 sm:w-5/12",
            "text-48 sm:text-80"
          )}
        >
          <span className={clsx("font-open-sans")}>
            The power of{" "}
            <span className={clsx("font-eb-garamond italic")}>
              Collective creativity.
            </span>
          </span>
        </div>
        <p className={clsx("w-7/12 pt-24", "font-light text-40")}>
          People and their incredible diversity are the heart and soul of
          everything we do.
        </p>
        <div className={clsx("py-12", "aspect-[16/9]")}>
          <CanvasWrapper />
        </div>
      </div>

      <div className={clsx("absolute", "z-0")}>
        <div
          className={clsx(
            "absolute inset-0 scale-[1.7]",
            "bg-thq-background-dark",
            "blur-md"
          )}
        ></div>

        <div className={clsx("relative", "mx-8")}>
          <div className={clsx("flex justify-between", "text-thq-text-light")}>
            <div className={clsx("w-4/12", "text-48")}>
              We delve deep into understanding who they are, what motivates
              them, what challenges they face and how complex systems and forces
              are shaping them.
            </div>

            <div className={clsx("w-4/12", "text-48")}>
              We delve deep into understanding who they are, what motivates
              them, what challenges they face and how complex systems and forces
              are shaping them.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
