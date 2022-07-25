import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/mtlloader';
import React, { useEffect, useState } from "react"






//const Desk = () => {....

//const Desk = () => {....}
export default function MeetinTable(){
    const [hovered, hover] = useState(false)
    // const dekskMtl = new MTLLoader().setPath("./assets/").load("desk.mtl");
    const deskMaterial = useLoader(MTLLoader, "meetingtable.mtl")
    const deskObj = useLoader(OBJLoader,'meetingtable.obj',loader=>{
        deskMaterial.preload()
        loader.setMaterials(deskMaterial)
    });
    return <primitive object={deskObj.clone()} scale={0.005} dispose={null}/>;
};






