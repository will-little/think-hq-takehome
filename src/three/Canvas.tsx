import { Suspense, useRef, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import { SeaKeap } from "./SeaKeep";

import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
} from "@react-three/postprocessing";
import { Environment, OrbitControls } from "@react-three/drei";

const CanvasWrapper = () => {
  return (
    <Canvas
      camera={{
        position: [200, 60, -150],
        fov: 40,
      }}
    >
      <EffectComposer>
        {/* <BrightnessContrast
          brightness={-0.04} // brightness. min: -1, max: 1
          contrast={0.08} // contrast: min -1, max: 1
        /> */}
        <Bloom
          intensity={1.0} // The bloom intensity.
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={false} // Enables or disables mipmap blur.
        />
        <HueSaturation
          saturation={0.4} // saturation: min 0, max 1
        />
      </EffectComposer>
      <Suspense fallback={null}>
        {/* <ambientLight castShadow={true} intensity={0.8} /> */}
        <spotLight
          decay={0}
          castShadow={true}
          position={[400, 60, 50]}
          intensity={5}
        />
        <SeaKeap scale={0.25} position={[0, -20, 0]} />
        <Environment preset="forest" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasWrapper;

//  <Canvas
//   camera={{
//     position: [150, 20, -110],
//     fov: 50,
//   }}
// >
//   <EffectComposer>
//     {/* <BrightnessContrast
//           brightness={-0.04} // brightness. min: -1, max: 1
//           contrast={0.08} // contrast: min -1, max: 1
//         /> */}
//     <HueSaturation
//       saturation={0.2} // saturation: min 0, max 1
//     />
//   </EffectComposer>
//   <Suspense fallback={null}>
//     {/* <ambientLight castShadow={true} intensity={0.8} />
//         <pointLight position={[0, 2, 5]} intensity={200} /> */}
//     <SeaKeap scale={0.25} position={[0, -20, 0]} />
//     <Environment preset="forest" />
//   </Suspense>
//   <OrbitControls />
// </Canvas>;
