import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/mtlloader';
import React, { useEffect, useState } from "react"
import { PlaneGeometry } from 'three';
import {Plane } from "@react-three/drei";
import {usePlane } from "@react-three/cannon";
import { DoubleSide } from "three";



// export default function Floor(){
       
//        return(<mesh rotation={[-Math.PI *0.5,0,0]}>
//             <PlaneGeometry args={[20,20]} />
//             <meshStandardMaterial color={"#000000"}/>

//         </mesh>);
// };




export default function Floor() {
    return (
 
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[300, 300, 300]}>

        <planeBufferGeometry />

        <meshBasicMaterial color="grey" side={DoubleSide} />
      </mesh>
    );
  }