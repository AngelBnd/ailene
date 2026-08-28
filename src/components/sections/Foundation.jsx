import Grid from "../global/Grid";
import Button from "../global/Button";
import {
  BrainIcon,
  DumbbellIcon,
  ClockIcon,
  TrendingUpIcon,
} from "./FoundationIcons";
import foundationMan from "../../assets/foundation-man.png";

/**
 * "Foundation" section — a full-width teal banner promoting the intro course.
 * Left: heading, four selling points, and a CTA. Right (desktop only): the
 * lesson-list card overlapping a photo; the photo is hidden below `lg`.
 *
 * The whole banner spans every column of the page <Grid>.
 */
const POINTS = [
  { icon: <BrainIcon />, lead: "Kuasai", rest: " fondasi AI" },
  { icon: <DumbbellIcon />, lead: "Latih", rest: " lewat praktik" },
  { icon: <ClockIcon />, lead: "Hemat", rest: " waktu kerja" },
  { icon: <TrendingUpIcon />, lead: "Siap", rest: " naik level" },
];

const LESSONS = [
  { no: "01", title: "Halo, Kenalin Aku AI", meta: "3 lesson · ±30 menit" },
  { no: "02", title: "Cara AI Berpikir", meta: "3 lesson · ±30 menit" },
  { no: "03", title: "Bahasa AI: Prompting 101", meta: "3 lesson · ±40 menit" },
  {
    no: "04",
    title: "AI di Dunia Kerja & Keseharian",
    meta: "3 lesson · ±35 menit",
  },
  {
    no: "05",
    title: "Tools AI: Pilih Yang Cocok",
    meta: "3 lesson · ±30 menit",
  },
  {
    no: "06",
    title: "Pakai AI dengan Aman & Bijak",
    meta: "3 lesson · ±25 menit",
  },
  { no: "07", title: "Roadmap: Kamu Sudah Siap", meta: "3 lesson · ±20 menit" },
];

function Foundation() {
  return (
    <section id="foundation" className=" bg-grey-light py-5 lg:py-16">
      <Grid className="w-full">
        <div className="relative col-span-full overflow-hidden rounded-md bg-primary px-6 py-12 sm:px-10 lg:flex lg:items-center lg:gap-22 lg:px-13 lg:py-9">
          {/* ---------- Left: copy ---------- */}
          <div className="flex flex-col gap-8 lg:w-[40%] lg:shrink-0">
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2 text-white">
                <h2 className="font-satoshi text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-4xl lg:tracking-[-0.03em]">
                  Satu course.
                  <br />
                  Fondasi AI yang kuat.
                </h2>
                <p className="font-satoshi text-lg font-medium leading-normal text-white sm:text-xl lg:text-base">
                  Belajar AI dari nol lewat 21 lesson pendek, latihan nyata, dan
                  guardrail yang bikin kamu tetap pegang kendali.
                </p>
              </div>

              <ul className="grid mb-5 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-1 sm:gap-y-5">
                {POINTS.map(({ icon, lead, rest }) => (
                  <li key={lead} className="flex items-center gap-2.5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white p-1.5 text-primary">
                      {icon}
                    </span>
                    <span className="font-satoshi text-lg text-white sm:text-bas">
                      <span className="font-bold">{lead}</span>
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="white"
              className="self-start"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path d="M3 12h14" />
                  <path d="m13 8 4 4-4 4" />
                </svg>
              }
            >
              Jelajahi kurikulumnya
            </Button>
          </div>

          {/* ---------- Right: lesson card (+ photo on desktop) ---------- */}
          <div className="mt-10 lg:relative lg:mt-0 lg:h-[520px] lg:flex-1">
            {/* Photo — hidden on mobile */}
            <img
              src={foundationMan}
              alt=""
              aria-hidden="true"
              className="hidden lg:absolute w-auto h-[69%] lg:right-[-5%] z-50 lg:bottom-[15%] lg:block   lg:rounded-xl lg:object-cover"
            />
            <div className="hidden lg:block rounded-lg z-0  bg-white/30 p-4 lg:absolute lg:right-0  lg:bottom-[15%] lg:w-[50%] lg:h-[61%]"></div>

            <div className="rounded-lg z-50 border border-grey-border bg-white p-4 shadow-[0_4px_29px_rgba(72,83,99,0.25)] lg:absolute lg:left-0 lg:top-1/2 lg:w-[62%] lg:-translate-y-1/2">
              <ul className="custom-scrollbar flex max-h-72 flex-col overflow-y-scroll pr-1.5 lg:max-h-none lg:overflow-visible lg:pr-0">
                {LESSONS.map(({ no, title, meta }, i) => (
                  <li
                    key={no}
                    className={`flex items-center gap-5.5 py-2.5 px-1.5 ${
                      i < LESSONS.length - 1
                        ? "border-b border-grey-border"
                        : ""
                    }`}
                  >
                    <span className="font-satoshi text-xs font-bold text-grey-dark">
                      {no}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-satoshi text-sm font-medium text-grey-dark">
                        {title}
                      </span>
                      <span className="font-satoshi text-xs text-grey-mid">
                        {meta}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Grid>
    </section>
  );
}

export default Foundation;
