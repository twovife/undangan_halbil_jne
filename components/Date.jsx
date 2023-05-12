import { Alex_Brush, Roboto } from "next/font/google";
import { SiGooglemaps } from "react-icons/si";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Date() {
  return (
    <section id="dates" className={`flex flex-col items-stretch py-12 bg-brand-putih ${roboto.className}`}>
      <h2 data-aos="fade-down" className={`text-3xl text-black text-center mb-6 ${roboto.className}`}>
        Save The Date
      </h2>

      <div data-aos="fade" className="mx-5 mb-6 bg-center bg-cover bg-cover-dates shadow-lg h-52 rounded-xl"></div>

      <div data-aos="fade-down" className="mx-5 bg-white drop-shadow rounded-xl p-3">
        {/* 1 Date Info */}
        <div data-aos="fade-left" className="flex flex-col items-stretch">
          <div className="p-4">
            <div className="text-center text-black">
              <div className="text-3xl font-semibold text-brand-birutua mb-3">Minggu</div>
              <div className="flex justify-center gap-5">
                <div className="flex-1 p-4 pr-0">
                  <div className="text-right text-2xl font-light">
                    Jl. Prof. Dr. Mustopo No.88, Ngadiluwih,
                    <br /> Kec. Ngadiluwih, Kediri
                  </div>
                </div>
                <div className="flex-1 text-left bg-blue-300 text-white p-4 pl-0">
                  <div className="text-5xl font-thin">14 Mei</div>
                  <div className="text-4xl font-thin">2023</div>
                  <div className="text-5xl font-thin">08:00 WIB</div>
                  <small className="text-sm text-right">s/d selesai</small>
                </div>
              </div>
              <div className="text-black">
                <div className="font-semibold mt-4 text-3xl">Special Perform</div>
                <div className={`${alexBrush.className} text-6xl mt-3`}>Silvi & Friends</div>
                <div className="font-semibold">BAND</div>
              </div>
            </div>
          </div>
          <a
            href="https://goo.gl/maps/PgzMR6mAznAgoDCf6?coh=178572&entry=tt"
            target="_blank"
            className="block px-8 py-2 mx-auto text-xs transition border border-brand-biru text-brand-biru rounded-xl hover:bg-brand-biru hover:text-white mt-3">
            <SiGooglemaps className="mx-auto text-2xl" />
            <div className="text-xl mt-2">Maps</div>
          </a>
        </div>
      </div>
    </section>
  );
}
