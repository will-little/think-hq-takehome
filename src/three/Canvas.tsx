import { Suspense, useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";

const CanvasWrapper = () => {
  return (
    <Canvas camera={{ position: [0, 0.1, 10] }}>
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
        {/* SeaKeep */}
      </Suspense>
    </Canvas>
  );
};

export default CanvasWrapper;
