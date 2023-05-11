import "add-to-calendar-button";
import { Oleo_Script, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const oleoScript = Oleo_Script({ subsets: ["latin"], weight: ["400"] });

export default function End() {
  return (
    <div>
      <section className={`bg-cover bg-center max-w-xl bg-brand-putih min-w-full h-64 py-16 ${roboto.className}`}>
        <h1 data-aos="fade" className={`text-brand-biru text-6xl text-center ${oleoScript.className}`}>
          Terimakasih
        </h1>
        <p className={`${roboto.className} text-center text-lg text-black`}>Telah meluangkan waktu untuk hadir</p>
      </section>
    </div>
  );
}
