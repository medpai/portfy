"use client";

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';

// Dynamically import Three.js components with no SSR to avoid the ReactCurrentOwner error
const DynamicStars = dynamic(() => import('./DynamicStars'), {
  ssr: false,
});

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Suspense fallback={null}>
      <DynamicStars />
    </Suspense>
  </div>
);

export default StarsCanvas;
