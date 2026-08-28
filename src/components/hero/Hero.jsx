import Button from "../global/Button";
import Grid from "../global/Grid";
import { Underline } from "../global/Stroke";
import Navbar from "./Navbar";
import CardCluster from "./CardCluster";
import mengubahStroke from "../../assets/strokes/mengubahStroke.svg";
import tertinggalStroke from "../../assets/strokes/tertinggalStroke.svg";

/**
 * Landing hero ("HOME + NAVBAR" frame). Content is placed on the shared
 * responsive <Grid> (4 / 6 / 12 cols), so it lines up with <GridOverlay>.
 * `col-span-full` spans the row at any breakpoint; the desktop-only spans keep
 * the copy centred and narrower than the full content width.
 */
function Hero() {
  return (
    <section className="relative h-screen overflow-y-hidden bg-[linear-gradient(to_bottom,#dfe6ea_0%,#dfe6ea_83%,#1e897b_140%)]">
      <Navbar />

      {/* <img
            src="/figma/headline-underline.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[42%] w-[94%] max-w-none -translate-x-1/2"
          /> */}

      <section className="flex flex-col h-full ">
        {/* Fixed content */}
        <Grid className="pt-12 text-center md:pt-[14vh] lg:pt-[8vh] ">
          <div className=" relative col-span-full lg:col-span-10 lg:col-start-2">
            <h1 className="relative font-satoshi text-[clamp(2.25rem,3.8vw,8rem)] font-bold leading-[1.25] tracking-[-0.03em] text-black">
              AI <Underline src={mengubahStroke}>mengubah</Underline> cara
              kerja.
              <br />
              Jangan sampai{" "}
              <Underline src={tertinggalStroke}>tertinggal</Underline>.
            </h1>
          </div>

          <p className="col-span-full mt-3 font-satoshi text-[clamp(1rem,3vh,1.2rem)] font-medium leading-normal text-grey-dark lg:col-span-8 lg:col-start-3">
            Yang lebih dulu belajar AI bukan selalu yang paling teknis—mereka
            hanya mulai lebih awal. Mulai dari lesson singkat yang bisa langsung
            kamu terapkan dalam pekerjaan.
          </p>

          <div className="col-span-full flex flex-wrap items-center justify-center gap-4 mt-4 z-55">
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
            >
              Mulai belajar gratis
            </Button>
            <Button variant="ghost">Lihat jalurnya</Button>
          </div>
        </Grid>

        {/* CardCluster is a direct child of section — flex-1 works here */}
        <CardCluster className="flex-1 min-h-0 " />
      </section>
    </section>
  );
}

export default Hero;
