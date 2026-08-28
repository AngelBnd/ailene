import Grid from "../global/Grid";
import Button from "../global/Button";

/**
 * "CTA" section — layout placeholder. Shorter than the rest (~400px). Content TBD.
 */
function Cta() {
  return (
    <section id="cta" className="flex h-[360px] items-center bg-primary">
      <Grid className="w-full">
        <header className="col-span-full flex flex-col items-center text-center text-white">
          <p className="font-outfit text-xl font-medium tracking-wide ">
            Satu lesson dulu aja
          </p>
          <h2 className="mt-2 font-satoshi text-4xl font-medium  md:text-5xl">
            Mulai dari fondasinya.
          </h2>
          <p className="mt-4 max-w-md font-satoshi font-medium text-base leading-relaxed">
            Gratis, tanpa perlu daftar, dan kamu bisa lanjut belajar dari
            terakhir kali kamu berhenti.
          </p>
        </header>

        <div className="fade-in col-span-full flex flex-wrap items-center justify-center gap-4 mt-4 z-50">
          <Button
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
            variant="white"
          >
            Mulai belajar gratis
          </Button>
          <Button
            variant="ghost"
            className="text-white!"
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
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            }
          >
            Program untuk perusahaan
          </Button>
        </div>
      </Grid>
    </section>
  );
}

export default Cta;
