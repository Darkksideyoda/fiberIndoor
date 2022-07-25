import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/mtlloader';
import React, { useEffect, useState } from "react"






//const Desk = () => {....}
export default function WallWind({wallScale}){
    
    const [hovered, hover] = useState(false)
    // const dekskMtl = new MTLLoader().setPath("./assets/").load("desk.mtl");
    const deskMaterial = useLoader(MTLLoader, "wallWindow.mtl")
    const deskObj = useLoader(OBJLoader,'wallWindow.obj',loader=>{
        deskMaterial.preload()
        loader.setMaterials(deskMaterial)
    });
    
    return <primitive object={deskObj.clone()} scale={wallScale} dispose={null}/>;
};



