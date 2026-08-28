import { useState } from "react";
import Grid from "../global/Grid";
import { Underline } from "../global/Stroke";
import TahuStroke from "../../assets/strokes/TahuStroke.svg";

/**
 * "FAQ" section — an accordion card spanning 8 columns. The section has no fixed
 * height; it grows with the open/closed state of the items down to the next
 * section. Each item keeps its own open state (first one open by default).
 */
const FAQS = [
  {
    q: "Apakah cocok untuk pemula?",
    a: "Iya. AI Fundamentals dimulai dari konsep dasar dan tidak mengasumsikan latar belakang teknis.",
  },
  {
    q: "Apakah gratis?",
    a: "Level 01 — AI Fundamentals — gratis sepenuhnya, termasuk semua 21 lesson di dalamnya. Level lanjutan dibuka bertahap dan sebagian berbayar.",
  },
  {
    q: "Apakah perlu membuat akun untuk mulai belajar?",
    a: "Kamu bisa menjelajah materi tanpa akun, tapi untuk menyimpan progres dan melanjutkan lesson kamu perlu daftar gratis dulu.",
  },
  {
    q: "Apakah semua learning path sudah tersedia?",
    a: "Belum. Saat ini baru Level 01 yang bisa diakses penuh. Level 02–06 sedang disiapkan dan akan diumumkan lewat email begitu siap.",
  },
  {
    q: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu lesson?",
    a: "Rata-rata 8–12 menit per lesson. Satu modul berisi 3 lesson dan biasanya selesai dalam 30–40 menit.",
  },
  {
    q: "Apakah ada sertifikat setelah menyelesaikan course?",
    a: "Ada. Setelah semua modul di sebuah level selesai, kamu bisa mengunduh sertifikat penyelesaian yang bisa dibagikan.",
  },
  {
    q: "Apakah Ailene tersedia untuk tim atau perusahaan?",
    a: "Ya. Kami punya paket tim dengan pengelolaan anggota, laporan progres, dan jalur belajar khusus. Hubungi support Ailene untuk detailnya.",
  },
];

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 py-4 text-left"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`size-4 shrink-0 text-grey-dark transition-transform ${
            open ? "" : "rotate-180"
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <span className="font-satoshi text-base font-bold text-grey-dark">
          {q}
        </span>
      </button>

      {open && (
        <p className="pb-4 font-medium pl-8 pr-4 font-satoshi text-sm leading-relaxed text-grey-dark">
          {a}
        </p>
      )}
    </div>
  );
}

function Faq() {
  return (
    <section
      id="faq"
      className="flex min-h-screen mt-16 flex-col border-b border-grey-border bg-grey-light"
    >
      <Grid className="w-full grow grid-rows-[auto_1fr] gap-y-4 lg:gap-y-7">
        <header className="col-span-full flex flex-col items-center text-center">
          <p className="font-outfit text-xl font-medium tracking-wide text-primary">
            Pertanyaan umum
          </p>
          <h2 className="mt-2 font-satoshi text-4xl font-medium text-black md:text-5xl">
            Yang perlu kamu{" "}
            <Underline
              src={TahuStroke}
              width="125%"
              x="-7%"
              y="-73%"
              className="opacity-52"
            >
              tahu
            </Underline>
          </h2>
        </header>

        <div className="col-span-full divide-y divide-grey-border rounded-lg border border-grey-border bg-white px-6 py-2 sm:px-10 sm:py-4 lg:col-span-8 lg:col-start-3">
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} {...item} defaultOpen={i === 0} />
          ))}
        </div>
      </Grid>
    </section>
  );
}

export default Faq;
