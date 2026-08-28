/**
 * The centre "box" of the hero cluster — a faux browser window showing a lesson.
 * Rebuilt entirely in JSX (no screenshot). All internal sizing is in `em` so the
 * whole card scales from the root `font-size` set by the caller.
 */
function SidebarItem({ children, done = false, active = false, num }) {
  return (
    <li
      className={`flex items-center gap-[0.6em] rounded-[0.5em] px-[0.6em] py-[0.5em] ${
        active ? "bg-grey-border text-white" : "text-grey-dark"
      }`}
    >
      <span
        className={`grid size-[1.5em] shrink-0 place-items-center rounded-full text-[0.7em] font-bold ${
          done
            ? "bg-primary/15 text-primary"
            : active
              ? "bg-primary/10 text-[#111827]"
              : "bg-grey-border text-grey-mid"
        }`}
      >
        {done ? "✓" : num}
      </span>
      <span className="truncate">{children}</span>
    </li>
  );
}

function LessonBrowserCard({ className = "", style }) {
  return (
    <div
      className={`overflow-hidden rounded-[0.85em] bg-white shadow-[0_4px_26px_rgba(72,83,99,0.2)] ${className}`}
      style={style}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-[0.75em] bg-[#eef1f3] px-[1em] py-[0.8em]">
        <span className="flex gap-[0.4em]">
          <span className="size-[0.6em] rounded-full bg-[#cfd6db]" />
          <span className="size-[0.6em] rounded-full bg-[#cfd6db]" />
          <span className="size-[0.6em] rounded-full bg-[#cfd6db]" />
        </span>
        <span className="flex-1 truncate rounded-[0.4em] bg-white px-[0.9em] py-[0.35em] text-center text-[0.72em] text-grey-mid">
          ailene.id/learn/ai-fundamentals
        </span>
      </div>

      <div className="flex">
        <aside className="hidden w-[38%] shrink-0 flex-col gap-[0.25em] border-r border-grey-border/60 p-[1em] text-[0.72em] sm:flex">
          <ul className="flex flex-col gap-[0.25em]">
            <SidebarItem done>Halo, Kenalin Aku AI</SidebarItem>
            <SidebarItem done>Cara AI Berpikir</SidebarItem>
            <SidebarItem active num="03">
              Bahasa AI…
            </SidebarItem>
            <SidebarItem num="04">AI di Dunia Kerja &…</SidebarItem>
            <SidebarItem num="05">Tools AI: Pilih Yang…</SidebarItem>
          </ul>
        </aside>

        <div className="flex-1 p-[1.3em]">
          <p className="text-[0.62em] font-bold tracking-[0.14em] text-grey-mid">
            MODUL 3 · LESSON 1 DARI 3
          </p>
          <h3 className="mt-[0.5em] text-[1.35em] font-bold text-grey-dark">
            Percakapan AI Pertamamu
          </h3>

          <div className="relative mt-[0.9em] h-[0.4em] w-full rounded-full bg-grey-border">
            <div className="h-full w-[62%] rounded-full bg-primary" />
            <img
              src="/figma/cursor.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-[60%] top-[0.2em] w-[2.2em] drop-shadow-sm"
            />
          </div>

          <p className="mt-[1em] text-[0.82em] leading-relaxed text-grey-dark">
            AI menjawab dengan memprediksi kata berikutnya dari pola — bukan
            mengingat jawaban. Makanya cara kamu bertanya menentukan hasilnya.
          </p>

          <div className="mt-[1em] rounded-[0.6em] border border-primary/25 bg-primary/5 p-[0.9em]">
            <p className="text-[0.6em] font-bold tracking-[0.16em] text-primary">
              CONTOH PROMPT
            </p>
            <p className="mt-[0.4em] text-[0.82em] text-grey-dark">
              &ldquo;Rangkum notulen ini jadi 5 poin untuk tim finance.&rdquo;
            </p>
          </div>

          <button
            type="button"
            className="mt-[1.1em] inline-flex items-center gap-[0.5em] rounded-full bg-grey-border px-[1.4em] py-[0.7em] text-[0.82em] font-bold text-grey-mid"
          >
            Lanjut
            <span className="block size-[1.1em]">
              <img
                src="/figma/icon-arrow-right.svg"
                alt=""
                className="size-full"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LessonBrowserCard;
