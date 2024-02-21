import React, { Suspense, lazy } from "react";
const Carousel = lazy(() => import("../Day7/Carousel.js"));

function LazyLoading() {
  const images = [
    "https://wallpapercave.com/wp/wp8782757.jpg",
    "https://wallpaperboat.com/wp-content/uploads/2021/04/19/75467/bleach-07.jpg",
    "https://images.alphacoders.com/819/81993.jpg",
    "https://s1.1zoom.me/b5050/144/332698-dikemoon_1920x1080.jpg",
    "https://wallpaperset.com/w/full/2/a/5/172758.jpg",
  ];

  return (
    <div>
      <Suspense fallback={<div className="carousel">Loading...</div>}>
        <Carousel images={images} />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
