import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-pager.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgPager from "lightgallery/plugins/pager";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <section id="gallery" className="flex flex-col items-stretch py-12 bg-brand-biru px-6 max-w-xl">
      <h2 data-aos="fade-down" className={`text-xl text-black text-center mb-6 ${roboto.className}`}>
        Kebersamaan Kita di Tahun 1443 H
      </h2>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
        elementClassNames="grid grid-cols-6 gap-x-2 gap-y-3"
        mode="lg-fade">
        <a data-aos="fade" href="/img/jnegaleri1.jpeg" className="col-span-6 object-cover">
          <img alt="Galeri 1" src="/img/jnegaleri1.jpeg" className="object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jneimg01.jpeg" className="col-span-2 object-cover">
          <img alt="Galeri 2" src="/img/jneimg01.jpeg" className="object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jneimg02.jpeg" className="col-span-2 object-cover">
          <img alt="Galeri 3" src="/img/jneimg02.jpeg" className="object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jneimg03.jpeg" className="col-span-2 object-cover">
          <img alt="Galeri 4" src="/img/jneimg03.jpeg" className="object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jneimg04.jpeg" className="col-span-3 object-cover">
          <img alt="Galeri 5" src="/img/jneimg04.jpeg" className="object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jneimg06.jpeg" className="col-span-3 object-cover">
          <img alt="Galeri 6" src="/img/jneimg06.jpeg" className="object-cover rounded-lg" />
        </a>
      </LightGallery>
    </section>
  );
}
