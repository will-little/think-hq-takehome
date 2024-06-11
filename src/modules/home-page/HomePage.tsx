import clsx from "clsx";
import CanvasWrapper from "src/three/Canvas";
import DesktopArrow from "./images/DesktopArrow";
import MobileArrow from "./images/MobileArrow";

function TitleAndModel() {
  return (
    <>
      <div className={clsx("pt-44 w-3/4 sm:w-5/12", "text-48 sm:text-80")}>
        <p className={clsx("font-open-sans")}>
          The power of
          <span
            className={clsx("font-eb-garamond italic", "before:content-['_']")}
          >
            collective creativity.
          </span>
        </p>
      </div>
      <p
        className={clsx(
          "w-full sm:w-7/12 pt-24",
          "font-light text-24 sm:text-40"
        )}
      >
        People and their incredible diversity are the heart and soul of
        everything we do.
      </p>
      <div className={clsx("py-12", "aspect-square sm:aspect-[16/10]")}>
        <CanvasWrapper />
      </div>
    </>
  );
}

function ArrowTextFlow() {
  return (
    <div
      className={clsx(
        "h-auto sm:h-[65vh]",
        "pt-8 pb-4 px-8",
        "flex flex-col sm:flex-row",
        "gap-6 sm:gap-2 justify-around",
        "text-thq-text-light"
      )}
    >
      <div
        className={clsx(
          "w-[0.75px] h-28 sm:h-full",
          "bg-thq-text-light",
          "self-center",
          "block sm:hidden"
        )}
      ></div>

      <p
        className={clsx(
          "w-full sm:w-5/12",
          "text-32 sm:text-40",
          "font-eb-garamond italic",
          "text-center sm:text-right",
          "mt-0 sm:mt-20"
        )}
      >
        We delve deep into understanding who they are, what motivates them, what
        challenges they face and how complex systems and forces are shaping
        them.
      </p>

      <DesktopArrow />

      <p
        className={clsx(
          "w-full sm:w-5/12",
          "text-20 font-light flex items-end",
          "text-center sm:text-left",
          "mb-0 sm:mb-20"
        )}
      >
        Our distinctive approach fosters collaboration with people from all
        walks of life to truly find the real creative answers to some of life’s
        most challenging and important questions. Anchoring ourselves in the
        principles of respect, diversity and empathy helps us get there.
      </p>

      <MobileArrow />
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="pb-32">
      <div className={clsx("px-8", "z-10", "relative")}>
        <TitleAndModel />
      </div>
      <div className={clsx("relative overflow-x-clip", "z-0")}>
        <div
          className={clsx(
            "absolute inset-0  mb-20",
            "scale-[1.35] sm:scale-[1.65] translate-y-12 sm:translate-y-0",
            "bg-thq-background-dark",
            "blur-md"
          )}
        ></div>
        <div className={clsx("relative")}>
          <ArrowTextFlow />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
