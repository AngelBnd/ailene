import Grid from "../global/Grid";
import ReviewCard from "./ReviewCard";
import ReviewStat from "./ReviewStat";
import { Underline } from "../global/Stroke";
import PengMrkSTroke from "../../assets/strokes/PengMrkStroke.svg";

/**
 * "Reviews" section — four testimonial cards. Each card spans 3 columns on
 * desktop (4 × 3 = one full row) and stacks on smaller screens.
 */
const REVIEWS = [
  {
    name: "Raka Aditya",
    role: "Mahasiswa",
    quote:
      "Awalnya saya cukup bingung harus mulai belajar AI dari mana. Ailene membantu saya memahami dasarnya tanpa harus punya background teknis. Lesson-nya singkat, jelas, dan langsung bisa saya coba sendiri.",
  },
  {
    name: "Nadia Putri",
    role: "Mahasiswa",
    quote:
      "Yang paling saya suka dari Ailene adalah materinya nggak berhenti di teori. Saya jadi lebih ngerti cara menggunakan AI untuk mengerjakan tugas, mencari ide, dan menyusun pekerjaan sehari-hari dengan lebih cepat.",
  },
  {
    name: "Dimas Pratama",
    role: "Product Manager",
    quote:
      "Ailene membuat proses belajar AI di tim kami jadi lebih terarah. Daripada masing-masing mencari materi sendiri, kami punya jalur belajar yang jelas dan materi yang mudah diikuti oleh anggota tim dengan berbagai tingkat pengalaman.",
  },
  {
    name: "Clara Wijaya",
    role: "Head of Operations",
    quote:
      "Kami melihat AI bukan hanya sebagai tools tambahan, tetapi sebagai bagian dari cara kerja tim. Materi Ailene membantu tim kami memahami bagaimana AI bisa diterapkan ke workflow nyata, dari prompting hingga membangun proses yang lebih efisien.",
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="border-b border-grey-border bg-grey-light py-8 lg:py-10"
    >
      <Grid className="w-full gap-y-6 ">
        <ReviewStat />

        <header className="col-span-full mt-4 flex flex-col items-start text-start lg:col-span-12">
          <p className="font-outfit text-xl font-medium tracking-wide text-primary">
            Dari para pelajar
          </p>
          <h2 className="mt-2 font-satoshi text-4xl font-medium leading-tight text-black md:text-5xl">
            Yuk, dengarkan{" "}
            <Underline src={PengMrkSTroke} width="82%" x="22px" y="-6px">
              pengalaman mereka.
            </Underline>
          </h2>
        </header>

        {REVIEWS.map((review) => (
          <ReviewCard
            key={review.name}
            {...review}
            className="col-span-full md:col-span-3 lg:col-span-3"
          />
        ))}
      </Grid>
    </section>
  );
}

export default Reviews;
