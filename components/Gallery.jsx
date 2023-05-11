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
    <section id="gallery" className="flex flex-col items-stretch py-12 bg-brand-biru px-6">
      <h2 data-aos="fade-down" className={`text-3xl text-black text-center mb-6 ${roboto.className}`}>
        Kebersamaan Kita
      </h2>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
        elementClassNames="grid grid-cols-6 gap-x-2 gap-y-3"
        mode="lg-fade">
        <a data-aos="fade" href="/img/jnegaleri1.jpeg" className="col-span-6">
          <img alt="Galeri 1" src="/img/jnegaleri1.jpeg" className=" h-full object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jnebg1.png" className="col-span-2">
          <img alt="Galeri 2" src="/img/jnebg1.png" className=" h-full object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jnebg2.png" className="col-span-2">
          <img alt="Galeri 3" src="/img/jnebg2.png" className="h-full object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jnebg1.png" className="col-span-2">
          <img alt="Galeri 4" src="/img/jnebg1.png" className="h-full object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jnebg2.png" className="col-span-3">
          <img alt="Galeri 5" src="/img/jnebg2.png" className="h-full object-cover rounded-lg" />
        </a>
        <a data-aos="fade" href="/img/jnebg1.png" className="col-span-3">
          <img alt="Galeri 6" src="/img/jnebg1.png" className="h-full object-cover rounded-lg" />
        </a>
      </LightGallery>
    </section>
  );
}
