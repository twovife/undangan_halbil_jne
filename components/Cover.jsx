import "add-to-calendar-button";

import Image from "next/image";
import { Oleo_Script, Roboto } from "next/font/google";
import CountdownTimer from "./CountdownTimer";

const oleoScript = Oleo_Script({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export default function Cover() {
  return (
    <section
      id="cover"
      className={`flex flex-col justify-between w-full min-h-screen bg-center bg-cover overflow-hidden bg-cover-hero ${roboto.className}`}>
      <div>
        <div data-aos="fade-down" className="flex justify-between px-10 mt-12">
          <h3 className={`text-brand-biru text-3xl mx-auto ${roboto.className}`}>HADIRILAH</h3>
        </div>

        <h1 data-aos="fade" className={`text-brand-biru text-6xl text-center mt-5 ${oleoScript.className}`}>
          Halal Bihalal
        </h1>

        <h3 data-aos="fade" className="mt-2 text-center text-brand-biru text-xl">
          14.05.2023
        </h3>
      </div>

      <div data-aos="fade" className="mb-14">
        {/* Countdown Timer */}
        <CountdownTimer targetTime={new Date("May 14, 2023 08:00:00")} />

        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20230514T070000/20230514T180000&ctz=Asia/Jakarta&text=Pernikahan+Ofi+%26+Wildan&location=Jl.+Anjasmoro+Gg.+1A,+RT/RW+05/01+Turirejo+Kec.+Lawang&uid=f4462101-061e-4976-9b9e-cc3f37b97a7c"
          target="_blank">
          <button className="block px-6 py-2 mx-auto font-semibold transition border rounded-xl  hover:bg-brand-biru bg-brand-birutua">
            Simpan Tanggal
          </button>
        </a>
      </div>
    </section>
  );
}
