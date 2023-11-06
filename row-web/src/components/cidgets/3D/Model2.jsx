/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model2.glb
Author: grafi (https://sketchfab.com/zdenkoroman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cracked-concrete-old-3d-scan-2d01ca3fd8fb4e96bf591110389a128c
Title: Cracked Concrete Old 3D Scan
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import MODEL from '../../../models/model2.glb'

export function Model2(props) {
  const { nodes, materials } = useGLTF(MODEL)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload(MODEL)
