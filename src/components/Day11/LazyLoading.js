import React, { Suspense, lazy } from "react";

const Carousel = lazy(() => import("../Day8/Carousel"));

function LazyLoading() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
