import { Poppins, Roboto } from "next/font/google";
import { SiGooglemaps } from "react-icons/si";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Date({ sesi }) {
  return (
    <section id="dates" className={`flex flex-col items-stretch py-12 bg-brand-putih ${roboto.className}`}>
      <h2 data-aos="fade-down" className={`text-3xl text-black text-center mb-6 ${roboto.className}`}>
        Save The Date
      </h2>

      <div data-aos="fade" className="mx-5 mb-6 bg-center bg-cover bg-cover-dates shadow-lg h-52 rounded-xl"></div>

      <div data-aos="fade-down" className="mx-5 bg-white drop-shadow rounded-xl p-3">
        {/* 1 Date Info */}
        <div data-aos="fade-left" className="flex flex-col items-stretch mb-6">
          <div className="flex items-center justify-between pt-8 pl-4 pr-6 mb-4">
            <div className="flex flex-col items-stretch">
              <h3 className="mb-2 text-xl font-medium text-black/90">Minggu</h3>
              <div className="flex items-center mb-1">
                <p className="mr-2 text-3xl font-bold text-black/90">14</p>
                <div className="flex flex-col">
                  <p className="text-xl text-black/90">Mei 2023</p>
                  <p className="text-md font-bold text-black/90">Pukul 07.00 s.d Selesai</p>
                </div>
              </div>
              <div className="border-b-4 border-black/90"></div>
              <p className="my-1 text-md font-semibold text-black/90">JNE Ngadiluwih</p>
              <p className="text-md text-black/90">
                Jl. Prof. Dr. Mustopo No.88, Ngadiluwih, <br />
                Kec. Ngadiluwih, Kediri
              </p>
            </div>
          </div>
        </div>
        <div className="border-black border-b-2 border w-4/5 mx-auto"></div>

        <div data-aos="fade-right" className="flex flex-col items-stretch mb-6">
          <div className="flex items-center text-right justify-between pt-8 pl-4 pr-6 mb-12">
            <div>asd</div>
            <div className="flex flex-col items-stretch">
              <h3 className="mb-2 text-xl font-medium text-black/90">Pengisi Acara</h3>
              <p className="text-md text-black/90">
                Penceramah : Ust. Adi Hidayat <br />
                Akustik : Silvi & Friend
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/jLtewZGjkbiQA8JU7"
            target="_blank"
            className="block px-8 py-2 mx-auto text-xs transition border border-brand-biru text-brand-biru rounded-xl hover:bg-brand-biru hover:text-white">
            <SiGooglemaps className="mx-auto text-2xl" />
            <div className="text-xl mt-2">Maps</div>
          </a>
        </div>
      </div>
    </section>
  );
}
