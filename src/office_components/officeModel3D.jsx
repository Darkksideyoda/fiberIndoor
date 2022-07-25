import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/mtlloader';
import React, { useEffect, useState } from "react"






//const Desk = () => {....}
export default function Office(props){
    const [hovered, hover] = useState(false)
    // const dekskMtl = new MTLLoader().setPath("./assets/").load("desk.mtl");
    const deskMaterial = useLoader(MTLLoader, "secWitoutWall.mtl")
    const deskObj = useLoader(OBJLoader,'secWitoutWall.obj',loader=>{
        deskMaterial.preload()
        loader.setMaterials(deskMaterial)
    });
    
    return <primitive object={deskObj.clone()} scale={0.05} dispose={null}/>;
};



