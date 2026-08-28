import { useState } from "react";
import Grid from "../global/Grid";
import CourseCard from "./CourseCard";
import { Underline } from "../global/Stroke";
import muStroke from "../../assets/strokes/muStroke.svg";

/**
 * "Levels" section — the six course cards.
 *
 * Desktop (lg+): a horizontal carousel. Four cards are visible and the
 * "prev"/"next" chevrons shift the track two cards at a time (6 cards → two
 * pages: 1–4, then 3–6). The shift is a CSS translate relative to the track:
 *   card width = (100% - 3 gaps) / 4
 *   card + gap = (100% + 1 gap) / 4   ← the per-step distance
 *
 * Below lg: the cards stack vertically. The first four show immediately; the
 * last two are revealed by the "Tampilkan 2 level lagi" button.
 */
const VISIBLE = 4;
const STEP = 2;
const MOBILE_PREVIEW = 4;

const COURSES = [
  {
    level: "Level 01",
    title: "AI Fundamentals",
    description: "Fondasi, prompting, workflow, safety, dan roadmap praktik.",
    available: true,
    badge: "Levelmu",
    rating: "4.9",
    reviews: "270,000 ulasan",
    detail: {
      meta: "±3,5 jam · 7 Modul · Bahasa Indonesia",
      blurb:
        "Pelajari cara kerja AI, cara menggunakannya dengan aman, dan bagaimana menerapkannya langsung di pekerjaan sehari-hari — tanpa perlu latar belakang teknis.",
      outcomes: [
        "Pahami cara AI berpikir dan menjawab pertanyaanmu",
        "Kuasai dasar prompting untuk hasil yang lebih akurat",
        "Temukan tools AI yang paling cocok untuk kebutuhanmu",
        "Terapkan AI secara aman, etis, dan bertanggung jawab",
        "Bangun roadmap belajar AI yang jelas sesuai jalurmu",
      ],
    },
  },
  {
    level: "Level 02",
    title: "AI Tools for You",
    description: "Memilih dan menguasai tools sesuai kebutuhanmu.",
    detail: {
      meta: "±3,5 jam · 7 Modul · Bahasa Indonesia",
      blurb:
        "Kenali beragam tools AI populer dan cara memilih yang paling pas untuk kebutuhan serta gaya kerjamu.",
      outcomes: [
        "Petakan tools AI untuk menulis, riset, dan desain",
        "Pilih tools sesuai kebutuhan dan anggaranmu",
        "Rangkai tools jadi workflow harian yang efisien",
        "Hubungkan beberapa tools tanpa ribet",
        "Bandingkan opsi gratis dan berbayar dengan bijak",
      ],
    },
  },
  {
    level: "Level 03",
    title: "AI for Professional",
    description: "Menerapkan AI pada konteks kerja sehari-hari.",
    detail: {
      meta: "±4 jam · 7 Modul · Bahasa Indonesia",
      blurb:
        "Terapkan AI pada pekerjaan nyata — dari menyiapkan rapat sampai menyusun laporan dan komunikasi tim.",
      outcomes: [
        "Percepat riset dan analisis untuk keputusan kerja",
        "Susun email, notulen, dan laporan lebih cepat",
        "Siapkan presentasi dan olah data dengan AI",
        "Jaga etika dan kebijakan AI di tempat kerja",
        "Bawa cara kerja baru ini ke seluruh tim",
      ],
    },
  },
  {
    level: "Level 04",
    title: "AI Builder",
    description: "Membangun aplikasi dan automasi kecil dengan no-code.",
    detail: {
      meta: "±4 jam · 7 Modul · Bahasa Indonesia",
      blurb:
        "Bangun aplikasi kecil dan automasi sendiri dengan pendekatan no-code — tanpa harus jadi programmer.",
      outcomes: [
        "Pahami dasar no-code dan pola automasi",
        "Bangun chatbot pertamamu dari nol",
        "Hubungkan API dan sumber data eksternal",
        "Deploy aplikasi kecil supaya bisa dipakai",
        "Rancang workflow yang jalan otomatis",
      ],
    },
  },
  {
    level: "Level 05",
    title: "AI Agentic",
    description: "Memahami dan membangun AI agent yang berjalan otonom.",
    detail: {
      meta: "±4,5 jam · 7 Modul · Bahasa Indonesia",
      blurb:
        "Pelajari cara kerja AI agent yang bisa merencanakan, memakai tools, dan menyelesaikan tugas secara mandiri.",
      outcomes: [
        "Pahami apa itu AI agent dan batasannya",
        "Rancang perencanaan dan penggunaan tools",
        "Beri agent memori untuk tugas panjang",
        "Jalankan agent secara otonom dengan aman",
        "Pasang guardrail agar tetap terkendali",
      ],
    },
  },
  {
    level: "Level 06",
    title: "AI Orchestration",
    description: "Mengelola banyak AI agent yang berjalan paralel.",
    detail: {
      meta: "±5 jam · 7 Modul · Bahasa Indonesia",
      blurb:
        "Kelola banyak AI agent yang bekerja paralel — koordinasi, pemantauan, dan skala untuk kebutuhan besar.",
      outcomes: [
        "Terapkan pola multi-agent yang umum dipakai",
        "Atur koordinasi dan antrian tugas antar agent",
        "Pantau jalannya sistem dengan observability",
        "Pasang guardrail di level sistem",
        "Siapkan arsitektur untuk skala produksi",
      ],
    },
  },
];

const MAX_INDEX = Math.max(0, COURSES.length - VISIBLE);
const PAGE_COUNT = Math.floor(MAX_INDEX / STEP) + 1;
const MOBILE_HIDDEN = COURSES.length - MOBILE_PREVIEW;

function Chevron({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d={dir === "prev" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

function Levels() {
  const [index, setIndex] = useState(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const move = (delta) =>
    setIndex((i) => Math.min(MAX_INDEX, Math.max(0, i + delta * STEP)));

  const page = Math.round(index / STEP);

  const mobileCourses = showAllMobile
    ? COURSES
    : COURSES.slice(0, MOBILE_PREVIEW);

  return (
    <section id="levels" className="py-12 lg:py-16">
      <Grid className="w-full gap-y-10">
        <header className="col-span-full flex flex-col items-start text-start lg:col-span-8">
          <p className="font-outfit text-xl font-medium tracking-wide text-primary">
            Pelan-pelan, tapi jelas arahnya
          </p>
          <h2 className="mt-2 font-satoshi text-4xl font-medium leading-tight text-black md:text-5xl">
            Mulai dari level yang sesuai dengan{" "}
            <Underline src={muStroke} width="32%" x="4.5em">
              kebutuhanmu
            </Underline>
            .
          </h2>
        </header>

        {/* -------- Mobile / tablet: vertical stack -------- */}
        <div className="col-span-full flex flex-col gap-4 lg:hidden">
          {mobileCourses.map((course) => (
            <CourseCard key={course.level} {...course} className="w-full" />
          ))}

          {!showAllMobile && MOBILE_HIDDEN > 0 && (
            <button
              type="button"
              onClick={() => setShowAllMobile(true)}
              className="mt-1 flex items-center gap-1.5 self-start font-satoshi text-base font-bold text-primary"
            >
              Tampilkan {MOBILE_HIDDEN} level lagi
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          )}
        </div>

        {/* -------- Desktop: carousel -------- */}
        <div className="relative col-span-full hidden lg:block">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={index === 0}
            aria-label="Sebelumnya"
            className="absolute left-0 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-grey-border bg-white text-grey-dark shadow-sm transition-opacity hover:bg-grey-light disabled:opacity-40"
          >
            <Chevron dir="prev" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={index >= MAX_INDEX}
            aria-label="Berikutnya"
            className="absolute right-0 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-grey-border bg-white text-grey-dark shadow-sm transition-opacity hover:bg-grey-light disabled:opacity-40"
          >
            <Chevron dir="next" />
          </button>

          {/*
            Inset for the whole carousel. `px-11` shrinks the viewport (and,
            proportionally, all four cards) while keeping exactly 4 visible — card
            width and the translate step are both relative to the viewport width,
            so they follow this padding automatically.
          */}
          <div className="px-11">
            <div className="overflow-hidden">
              <div
                className="flex gap-3 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(calc(${index} * (100% + 0.75rem) / -4))`,
                }}
              >
                {COURSES.map((course) => (
                  <CourseCard
                    key={course.level}
                    {...course}
                    hoverDetail={course.detail}
                    className="w-[calc((100%-2.25rem)/4)] shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {PAGE_COUNT > 1 && (
          <div className="col-span-full hidden justify-center gap-3 lg:flex">
            {Array.from({ length: PAGE_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Halaman ${i + 1}`}
                onClick={() => setIndex(Math.min(MAX_INDEX, i * STEP))}
                className={`h-2 rounded-full transition-all ${
                  i === page ? "w-6 bg-primary" : "w-2 bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </Grid>
    </section>
  );
}

export default Levels;
