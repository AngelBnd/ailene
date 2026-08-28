import Grid from "../global/Grid";
import LevelCard from "./LevelCard";
import { SparkleIcon, RepeatIcon, CpuIcon } from "./LevelIcons";
import pelajariArrow from "../../assets/strokes/PelajariArrow.svg";
import { Underline } from "../global/Stroke";
import PelajariStroke from "../../assets/strokes/PelajariStroke.svg";
import repetitifImg from "../../assets/strokes/Repetitif.svg";
import workflowImg from "../../assets/strokes/Workflow.svg";
import agentImg from "../../assets/strokes/Agent.svg";

/**
 * "Pelajari" section — three level cards (Pemula / Menengah / Mahir).
 * Each card spans 4 columns on phones (full width → stacked) and 3 columns on
 * desktop; the trio is nudged to `col-start-2` so 3×3 = 9 columns sit centred
 * on the 12-column grid.
 */
const LEVELS = [
  {
    level: "Pemula",
    icon: <SparkleIcon />,
    title: "Pangkas kerjaan repetitif",
    description:
      "Rangkum dokumen, bikin draft, rapiin  data— kerjaan yang biasa makan berjam-jam, kini selesai dalam hitungan menit",
    image: repetitifImg,
  },
  {
    level: "Menengah",
    icon: <RepeatIcon />,
    title: "Workflow jalan sendiri",
    description:
      "Rangkai beberapa langkah jadi satu alur: AI yang menyiapkan, menyusun, dan meneruskan tanpa kamu ulang dari awal",
    image: workflowImg,
  },
  {
    level: "Mahir",
    icon: <CpuIcon />,
    title: "Bangun tools AI sendiri",
    description:
      "Gabungkan model, data, dan logika kamu jadi asisten khusus yang paham konteks tim dan cara kerjamu",
    image: agentImg,
  },
];

function Pelajari() {
  return (
    <section
      id="pelajari"
      className="flex min-h-screen items-center py-12 lg:py-16"
    >
      <Grid className="w-full gap-y-4">
        <header className="col-span-full flex flex-col items-center text-center">
          <p className="font-outfit text-xl font-medium tracking-wide text-primary">
            Ini yang akan bisa kamu capai
          </p>
          <h2 className="mt-2 font-satoshi text-4xl font-medium text-black md:text-5xl">
            Apa yang akan kamu{" "}
            <Underline
              src={PelajariStroke}
              width="117%"
              x="-7%"
              y="-73%"
              className="opacity-52"
            >
              pelajari
            </Underline>
          </h2>
          <p className="mt-4 max-w-2xl font-satoshi font-medium text-base leading-relaxed text-black">
            Ailene menemani kamu belajar AI dari tahap paling dasar hingga mahir
            — satu level dalam satu waktu. Setiap materi yang kamu pelajari
            dirancang untuk langsung bisa diterapkan. Jadi dari lesson pertama
            pun, kamu sudah bisa mulai merasakan perbedaannya di keseharianmu.
          </p>
        </header>

        <div className="col-span-full hidden flex-col items-center text-center md:flex">
          <img
            src={pelajariArrow}
            alt=""
            aria-hidden="true"
            className="mt-6 w-full max-w-4xl"
          />
        </div>

        {LEVELS.map((item, i) => (
          <LevelCard
            key={item.level}
            {...item}
            className={`col-span-4 md:col-span-2 lg:col-span-4 ${
              i === 0 ? "lg:col-start-1" : ""
            }`}
          />
        ))}
      </Grid>
    </section>
  );
}

export default Pelajari;
