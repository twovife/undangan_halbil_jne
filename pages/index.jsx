import NavMenu from "@/components/NavMenu";
import Gallery from "@/components/Gallery";
import Banner from "@/components/Banner";
import Cover from "@/components/Cover";
import Date from "@/components/Date";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

// Toastify CSS
import "react-toastify/dist/ReactToastify.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import End from "@/components/End";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [isPlayerShow, setIsPlayerShow] = useState(false);

  const playAudio = (isPlay) => {
    if (isPlay) {
      audio?.play();
      setIsPlay(true);
      return;
    }

    audio?.pause();
    setIsPlay(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;

    if (position > 844) {
      setIsPlayerShow(true);
    } else {
      setIsPlayerShow(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    setAudio(new Audio("/music/tulus.mp3"));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const { to, sesi } = router.query;

  return (
    <div className={`${poppins.className} text-white max-w-xl mx-auto`}>
      <Head>
        <title>Undangan Hajatan</title>
        {/* <meta
          name="description"
          content="Kami memohon doa restu dari Bapak/Ibu/Saudara/(i)"
        /> */}
        <meta property="og:title" content="Undangan Hajatan" />
      </Head>
      {/* BANNER */}
      <Banner to={to} onOpen={playAudio} />
      {/* NAV MENU */}
      {/* <NavMenu /> */}
      {/* PLAYER */}
      <button
        onClick={() => playAudio(!isPlay)}
        className={`fixed transition z-40 flex items-center justify-center w-12 h-12 border border-black rounded-full bottom-16 right-2 bg-white/50 ${
          isPlayerShow ? "opacity-100" : "opacity-0"
        }`}>
        <Image alt="playback" src={isPlay ? "/stop.svg" : "/play.svg"} width={20} height={20} />
      </button>
      <main className={`bg-white overflow-hidden ${poppins.className}`}>
        <Head>
          <title>Undangan Hajatan</title>
        </Head>
        {/* COVER */}
        <Cover />

        {/* DATE */}
        <Date sesi={sesi} />

        {/* GALLERT */}
        <Gallery />
        <End />

        <div className="p-4 pb-16 bg-white">
          <p className="text-xs text-center text-black">© Copyright Selalu Project 2023</p>
        </div>

        <ToastContainer />
      </main>
    </div>
  );
}
