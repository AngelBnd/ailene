import Grid from "../global/Grid";
import Button from "../global/Button";
import discordShot from "../../assets/Discord.png";
import { Underline } from "../global/Stroke";
import barengStroke from "../../assets/strokes/sendirianStroke.svg";
/**
 * "Community" section — copy on the left, a Discord screenshot on the right that
 * starts at column 6 and is allowed to bleed past the grid's right edge (the
 * overflow is clipped by the section, not scrolled).
 */
function Community() {
  return (
    <section
      id="community"
      className="flex min-h-screen items-center overflow-hidden border-b border-grey-border py-7 lg:py-10"
    >
      <Grid className="w-full items-center gap-y-10">
        <div className="col-span-full flex flex-col items-start md:col-span-full md:items-center md:text-center lg:col-span-5 lg:items-start  lg:text-start">
          <header className="flex flex-col md:items-center lg:items-start lg:text-start">
            <p className="font-outfit text-xl font-medium tracking-wide text-primary">
              Ada ruang buat terus terhubung
            </p>
            <h2 className="mt-2 font-satoshi text-4xl font-medium leading-tight text-black md:text-5xl">
              Belajar{" "}
              <Underline src={barengStroke} x="-2px" y="-8px" width="103%">
                bareng
              </Underline>
              <br />
              nggak sendirian.
            </h2>
          </header>
          <p className="mt-4 mb-12 md:mx-auto md:max-w-lg md:text-center lg:mx-0 lg:max-w-sm lg:text-start font-satoshi font-medium text-base leading-relaxed text-black">
            Bergabung dengan 10.000+ member di Gen AI Labs — komunitas Discord
            untuk bertanya, berbagi, dan belajar dari sesama. Untuk kendala
            akun, hubungi support Ailene.
          </p>
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
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            }
          >
            Buka Gen AI Labs
          </Button>
        </div>

        <div className="col-span-full w-fit rounded-md bg-white px-7 py-8 lg:col-span-7 lg:col-start-6">
          <img
            src={discordShot}
            alt="Tampilan server Discord Gen AI Labs"
            className="w-[125vw] max-w-none rounded-sm ring-1 ring-grey-border lg:w-[62vw] lg:min-w-170"
          />
        </div>
      </Grid>
    </section>
  );
}

export default Community;
