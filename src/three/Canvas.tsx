import { Suspense, useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import { SeaKeap } from "./SeaKeep";

import {
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";

const CanvasWrapper = () => {
  return (
    <Canvas camera={{ position: [0, 0, 500], near: 0.1, far: 10000 }}>
      <EffectComposer>
        <BrightnessContrast
          brightness={-0.04} // brightness. min: -1, max: 1
          contrast={0.08} // contrast: min -1, max: 1
        />
        <HueSaturation
          saturation={-0.1} // saturation: min 0, max 1
        />
      </EffectComposer>
      <Suspense fallback={null}>
        <ambientLight castShadow={true} intensity={0.8} />
        <pointLight position={[0, 2, 5]} intensity={200} />
        <SeaKeap />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasWrapper;
