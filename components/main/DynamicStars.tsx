"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';

// Declare the Three.js JSX elements to fix TypeScript errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      points: any;
      pointMaterial: any;
    }
  }
}

// Define the component that will be used when Three.js is available
const StarComponentWithThree = ({ isClient }: { isClient: boolean }) => {
  // Only import Three.js libraries when in the browser
  if (!isClient) return null;
  
  // Local component to avoid top-level imports
  const InnerStarComponent = () => {
    // Dynamically import required modules
    const { Canvas, useFrame } = require("@react-three/fiber");
    const { Points, PointMaterial } = require("@react-three/drei");
    const random = require("maath/random/dist/maath-random.esm");

    // Inner component with Three.js logic
    const StarPoints = (props: any) => {
      const ref: any = useRef();
      const [sphere] = useState(() => 
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
      );

      useFrame((state: any, delta: number) => {
        if (ref.current) {
          ref.current.rotation.x -= delta/10;
          ref.current.rotation.y -= delta/15;
        }
      });

      return (
        <group rotation={[0, 0, Math.PI / 4]}>
          <Points
            ref={ref}
            positions={sphere}
            stride={3}
            frustumCulled
            {...props}
          >
            <PointMaterial
              transparent
              color="#fff"
              size={0.002}
              sizeAttenuation={true}
              depthWrite={false}
            />
          </Points>
        </group>
      );
    };

    return (
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarPoints />
      </Canvas>
    );
  };

  return <InnerStarComponent />;
};

// Client-side only component
const DynamicStars = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-screen bg-[#030014]" />;
  }

  return <StarComponentWithThree isClient={isClient} />;
};

export default DynamicStars;
