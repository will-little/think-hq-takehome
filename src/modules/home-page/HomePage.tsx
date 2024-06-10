import clsx from "clsx";
import CanvasWrapper from "src/three/Canvas";

function TitleAndModel() {
  return (
    <>
      <div
        className={clsx(
          "pt-24 sm:pt-[10.875rem] w-3/4 sm:w-5/12",
          "text-48 sm:text-80"
        )}
      >
        <span className={clsx("font-open-sans")}>
          The power of
          <span
            className={clsx("font-eb-garamond italic", "before:content-['_']")}
          >
            collective creativity.
          </span>
        </span>
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
        "h-auto sm:h-[80vh]",
        "pt-8 pb-4 h-full px-8",
        "flex flex-col sm:flex-row",
        "gap-6 sm:gap-0",
        "justify-around",
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

      <svg width="auto" viewBox="0 0 16 679" className="hidden sm:block">
        <path
          d="M7.29292 679.707C7.68345 680.098 8.31661 680.098 8.70714 679.707L15.0711 673.343C15.4616 672.953 15.4616 672.319 15.0711 671.929C14.6806 671.538 14.0474 671.538 13.6569 671.929L8.00003 677.586L2.34318 671.929C1.95265 671.538 1.31949 671.538 0.928962 671.929C0.538437 672.319 0.538437 672.953 0.928962 673.343L7.29292 679.707ZM7 4.37114e-08L7.00003 679L9.00003 679L9 -4.37114e-08L7 4.37114e-08Z"
          fill="currentColor"
        />
      </svg>

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

      <svg height="83" viewBox="0 0 16 85" className="block sm:hidden">
        <path
          d="M8.5 1C8.5 0.723858 8.27614 0.5 8 0.5C7.72386 0.5 7.5 0.723858 7.5 1L8.5 1ZM7.64645 84.3536C7.84171 84.5488 8.15829 84.5488 8.35356 84.3536L11.5355 81.1716C11.7308 80.9763 11.7308 80.6597 11.5355 80.4645C11.3403 80.2692 11.0237 80.2692 10.8284 80.4645L8 83.2929L5.17158 80.4645C4.97631 80.2692 4.65973 80.2692 4.46447 80.4645C4.26921 80.6597 4.26921 80.9763 4.46447 81.1716L7.64645 84.3536ZM7.5 1L7.5 84L8.5 84L8.5 1L7.5 1Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

const HomePage = () => {
  return (
    <>
      <div className={clsx("px-8", "z-10", "relative")}>
        <TitleAndModel />
      </div>
      <div className={clsx("relative overflow-x-clip", "z-0")}>
        <div
          className={clsx(
            "absolute inset-0 scale-125 sm:scale-150",
            "bg-thq-background-dark",
            "blur-md"
          )}
        ></div>
        <div className={clsx("relative")}>
          <ArrowTextFlow />
        </div>
      </div>
    </>
  );
};

export default HomePage;
