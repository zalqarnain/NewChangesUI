import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react';
import { Model2 } from './Model2';
import { useEffect } from 'react';
// import { OrbitControls } from '@react-three/drei';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
   const { camera, gl } = useThree();
   useEffect(
      () => {
         const controls = new OrbitControls(camera, gl.domElement);
         // controls.minDistance = 10;
         // controls.maxDistance = 20;
         // controls.maxZoom = 10;
         // controls.minZoom = 10;
         return () => {
           controls.dispose();
         };
      },
      [camera, gl]
   );
   return null;
};

const ModelViewer = () => {
    return (
        <Canvas
         camera={{ fov: 25, near: 0.1, far: 1000, position: [-1, 2, -4] }}
         // orthographic
         style={{
            backgroundColor: 'transparent',
            width: '500px',
            height: '500px',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model2/>
         </Suspense>
         <CameraController/>
         {/* <OrbitControls minDistance={3} /> */}
      </Canvas>
    );
}

export default ModelViewer