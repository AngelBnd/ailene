import LessonBrowserCard from "./LessonBrowserCard";
import PromptingExerciseCard from "./PromptingExerciseCard";
import CheckpointQuizCard from "./CheckpointQuizCard";
import DoodleLabel from "./DoodleLabel";
import pointToRight from "../../assets/strokes/PointToRight.svg";
import pointToLeft from "../../assets/strokes/PointToLeft.svg";

/**
 * The three overlapping "boxes" below the hero copy.
 *
 * Desktop (xl+): the Figma composition is authored 1:1 at 1100×700px with
 * absolute positioning + rotations, then uniformly scaled to the available
 * width with container-query units — so positions, rotations and type all
 * stay locked together at any size.
 *
 * md–xl (tablets, incl. iPad Pro portrait): the same collage, but NOT
 * down-scaled — it fills the container width so the cards stay large. Every
 * offset/size in it is a %, so dropping the scale just enlarges it uniformly.
 *
 * Below md: the cards drop into a compact portrait collage.
 */

function CardCluster({ className = "" }) {
  return (
    <div className={`${className} relative w-full h-full`}>
      {/* ---------- Desktop (xl+): scaled collage ---------- */}
      <div
        className="absolute hidden h-full w-full bottom-0  xl:block"
        style={{ containerType: "inline-size" }}
      >
        <div
          className="absolute  top-0 h-full w-full  "
          style={{
            transformOrigin: "top left",
            transform: "scale(calc(100cqw / 1100))",
          }}
        >
          <div className="relative w-full h-full  ">
            <DoodleLabel
              arrow={pointToRight}
              className="absolute z-50 left-[21.5%] bottom-[67%] w-[6.9%] text-right text-xl"
            >
              Langsung praktek!
            </DoodleLabel>

            <DoodleLabel
              arrow={pointToLeft}
              className="absolute z-50  right-[21.2%] bottom-[68%] w-[6%] text-xl"
              under
            >
              Progresmu tersimpan!
            </DoodleLabel>

            <div
              className="absolute left-[50%] z-10 w-[40%] -translate-x-1/2 rotate-[2.6deg]"
              style={{
                containerType: "inline-size",

                bottom:
                  "var(--hero-lesson-bottom, clamp(-225px, calc(20vh - 391px), 300px))",
              }}
            >
              <LessonBrowserCard className="w-full text-[3.25cqw]" />
            </div>

            <div
              className="absolute left-[28%] z-20 w-[23%] -translate-x-1/2 -rotate-[9.7deg]"
              style={{
                containerType: "inline-size",
                bottom: "clamp(-60px, calc(10vh - 90px), 40px)",
              }}
            >
              <PromptingExerciseCard className="w-full text-[5.3cqw]" />
            </div>

            <div
              className="absolute left-[72%]  z-20 w-[22%] -translate-x-1/2 rotate-[5.2deg]"
              style={{
                containerType: "inline-size",
                bottom: "clamp(-60px, calc(10vh - 120px), 120px)",
              }}
            >
              <CheckpointQuizCard className="w-full text-[5.8cqw]" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- md–xl (tablet / iPad Pro): full-size collage ---------- */}
      <div
        className="absolute hidden h-full w-full bottom-0 md:block xl:hidden"
        style={{ containerType: "inline-size" }}
      >
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <DoodleLabel
              arrow={pointToRight}
              className="absolute z-10 left-[15%] bottom-[62%] w-[8.4%] text-right text-xl"
            >
              Langsung praktek!
            </DoodleLabel>

            <DoodleLabel
              arrow={pointToLeft}
              className="absolute z-10 right-[15%]  bottom-[70%] w-[7.4%] text-xl"
              under
            >
              Progresmu tersimpan!
            </DoodleLabel>

            <div
              className="absolute left-[50%] bottom-[3vh] z-10 w-[50%] -translate-x-1/2 rotate-[2.6deg]"
              style={{
                containerType: "inline-size",
                // Separate from the xl collage's --hero-lesson-bottom. On
                // 16:10 & squarer (incl. iPad Pro portrait) it's overridden
                // in index.css; the fallback here is the 16:9 tablet value.
                bottom:
                  "var(--hero-lesson-bottom-md, clamp(-330px, calc(30vh - 360px), 130px))",
              }}
            >
              <LessonBrowserCard className="w-full text-[3.25cqw]" />
            </div>

            <div
              className="absolute left-[26%] z-20 w-[29%] -translate-x-1/2 -rotate-[9.7deg]"
              style={{
                containerType: "inline-size",
                bottom: "clamp(-60px, calc(10vh - 90px), 40px)",
              }}
            >
              <PromptingExerciseCard className="w-full text-[5.3cqw]" />
            </div>

            <div
              className="absolute left-[74%] z-20 w-[28%] -translate-x-1/2 rotate-[5.2deg]"
              style={{
                containerType: "inline-size",
                bottom: "clamp(-60px, calc(10vh - 120px), 120px)",
              }}
            >
              <CheckpointQuizCard className="w-full text-[5.8cqw]" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile: compact overlapping collage ---------- */}

      <div
        className="absolute inset-0 min-h-[20rem] md:hidden"
        style={{ containerType: "inline-size" }}
      >
        <div
          className="absolute left-[3%] bottom-0 z-10 w-[92%] rotate-[-1.5deg]"
          style={{ containerType: "inline-size" }}
        >
          <LessonBrowserCard className="w-full text-[clamp(11px,1.7vh,20px)]" />
        </div>

        <div
          className="absolute bottom-[20%] right-[5%] z-20 w-[60%] rotate-[4.5deg]"
          style={{ containerType: "inline-size", bottom: "0" }}
        >
          <PromptingExerciseCard className="w-full text-[clamp(9px,1.4vh,13px)]" />
        </div>

        {/* Doodle: top-right, points down at the cards */}
        <DoodleLabel
          arrow={pointToLeft}
          className="absolute right-[10%] bottom-[62%] z-40 w-[18%] text-[3.9cqw]"
          under
        >
          Progresmu tersimpan!
        </DoodleLabel>

        {/* Doodle: bottom-left, positive bottom, points right at the cards */}
        {/* <DoodleLabel
          arrow={pointToRight}
          className="absolute left-[4%] bottom-[64%] z-40  w-[20%] text-[4cqw] text-right "
        >
          Langsung praktek!
        </DoodleLabel> */}
      </div>
    </div>
  );
}

export default CardCluster;
