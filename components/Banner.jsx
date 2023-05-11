import Image from "next/image";
import { Oleo_Script, Roboto } from "next/font/google";
import { useState } from "react";

const oleoScript = Oleo_Script({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });
export default function Banner({ to, onOpen }) {
  const [isShow, setIsShow] = useState(true);
  const [isHide, setIsHide] = useState(false);

  return (
    <div
      className={`fixed z-50 top-0 right-0 bottom-0 left-0 transition max-w-xl mx-auto ${isHide ? "hidden" : "block"} ${
        isShow ? "opacity-100" : "opacity-0"
      }`}>
      <div className="absolute z-10 min-w-full min-h-screen"></div>
      <div className="absolute z-0 min-w-full h-screen bg-center bg-cover bg-cover-welcome"></div>
      <section className={`absolute z-20 flex h-full min-w-full flex-col justify-between items-center py-16 ${roboto.className}`}>
        <div data-aos="fade">
          <h1 className={`text-brand-biru text-3xl text-center ${roboto.className}`}>Undangan</h1>
          <h1 className={`text-brand-biru text-6xl text-center mt-5 ${oleoScript.className}`}>Halal Bihalal</h1>
        </div>
        <div className="items-center px-6 py-4 mx-6 rounded-xl bg-gradient-to-t from-brand-birutua to-brand-biru">
          <p className="text-xs font-medium text-center text-white">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="mt-4 mb-4 text-2xl font-bold text-center text-white animate-pulse">{to}</p>
          <a
            href="#cover"
            onClick={() => {
              setIsShow(false);

              setTimeout(function () {
                setIsHide(true);
              }, 1000);

              onOpen(true);
            }}
            className="block w-40 px-6 py-2 mx-auto text-xs text-center text-brand-birutua font-semibold transition bg-white rounded-lg hover:bg-gray-300">
            Buka Undangan
          </a>
        </div>
      </section>
    </div>
  );
}
