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
              collective creativity.
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

      <div className={clsx("relative", "z-0")}>
        <div
          className={clsx(
            "absolute inset-0 scale-150",
            "bg-thq-background-dark",
            "blur-md"
          )}
        ></div>

        <div
          className={clsx(
            "relative",
            "h-[50vh]",
            "px-8 py-16 h-full",
            "flex justify-around",
            "text-thq-text-light"
          )}
        >
          <p
            className={clsx(
              "w-5/12",
              "text-40 font-eb-garamond italic text-right leading-relaxed"
            )}
          >
            We delve deep into understanding who they are, what motivates them,
            what challenges they face and how complex systems and forces are
            shaping them.
          </p>

          <p className={clsx("w-5/12", "text-20 font-light flex items-end")}>
            Our distinctive approach fosters collaboration with people from all
            walks of life to truly find the real creative answers to some of
            life’s most challenging and important questions. Anchoring ourselves
            in the principles of respect, diversity and empathy helps us get
            there.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
