/**
 * Impact-stat banner for the Reviews section — a full-width teal panel whose
 * headline stat is echoed in a white card.
 *
 * The stat card is in normal flow (stacked under the text) on small screens, and
 * switches to `absolute` at `lg` so it pins to the panel's bottom-right *border*
 * edge. Absolute offsets are measured from the padding box, so the parent's
 * `lg:px-14 lg:py-8` never push the card around.
 */
function ReviewStat() {
  return (
    <div className="col-span-full relative flex flex-col gap-6 overflow-hidden rounded-md bg-primary px-5 py-8 sm:px-10 lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-9">
      <div className="flex flex-col gap-2 text-white lg:max-w-[38rem]">
        <h3 className="font-satoshi text-2xl font-bold leading-snug">
          97% pengguna merasakan dampak nyata dari Ailene
        </h3>
        <p className="font-satoshi text-sm font-medium leading-relaxed text-white/90 lg:text-base">
          Mereka melaporkan{" "}
          <strong className="font-bold">peningkatan produktivitas</strong> nyata
          setelah belajar menerapkan AI secara{" "}
          <strong className="font-bold">efisien</strong> bersama Ailene.
        </p>
      </div>

      <div
        aria-hidden="true"
        className="h-29 w-full lg:h-auto lg:w-[160px] lg:shrink-0"
      />

      {/* Stat card — always absolute, so the parent's padding never moves it.
          Bottom-centre on mobile, bottom-right on desktop. */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-sm rounded-b-none bg-white px-7 py-6 text-center shadow-md shadow-black lg:left-auto lg:right-[5%] lg:translate-x-0 lg:px-6">
        <p className="font-satoshi text-5xl font-bold leading-none text-primary lg:text-6xl">
          97%
        </p>
        <p className="mt-2 font-satoshi text-xs font-medium text-grey-dark">
          Dari 270.000+ pengguna
        </p>
      </div>
    </div>
  );
}

export default ReviewStat;
