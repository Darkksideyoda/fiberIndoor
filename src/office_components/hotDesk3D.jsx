import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/mtlloader';
import React, { useEffect, useState } from "react"
import { Html } from "@react-three/drei";







// //const Desk = () => {....}
// export default function Desk(props){
//     const [hovered, hover] = useState(false)
//     // const dekskMtl = new MTLLoader().setPath("./assets/").load("desk.mtl");
//     const deskMaterial = useLoader(MTLLoader, "desk.mtl")
//     const deskObj = useLoader(OBJLoader,'desk.obj',loader=>{
//         deskMaterial.preload()
//         loader.setMaterials(deskMaterial)
//     });
    
//     return <primitive object={deskObj.clone()} scale={0.04} dispose={null}/>;
// };







//const Desk = () => {....}
export default function Desk({x,y,z}){
 
    // const dekskMtl = new MTLLoader().setPath("./assets/").load("desk.mtl");
    const normalDeskMtl =  useLoader(MTLLoader, "desk.mtl")
    const deskObjNormal = useLoader(OBJLoader,'desk.obj',loader=>{        
        
        normalDeskMtl.preload()
        loader.setMaterials(normalDeskMtl)
    });

    const deskMaterialOnHover = useLoader(MTLLoader, "newmtlDesk.mtl")
    const deskObjHover = useLoader(OBJLoader,'newmtlDesk.obj',loader=>{        
        
        deskMaterialOnHover.preload()
        loader.setMaterials(deskMaterialOnHover)
    });

     

    const [hovered, setHovered] = useState(false)
    let currentObj = deskObjNormal

    useEffect(() => {
        if(hovered == true){
            currentObj = deskObjHover
            document.body.style.cursor = "pointer"
        }
        else{
            currentObj = deskObjNormal
            document.body.style.cursor = "auto"
        }

    }, [hovered])
  
 
    return (
        
    <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} position={[x,y,z]}>
    {

           hovered ? 
           <primitive object={deskObjHover} scale={1.256} dispose={null}>
            <Html position={[0,120,10]} >
                <div className=" w-32 bg-transparent-500 rounded-lg text-white ">
                <span style={{fontSize:"20px",color:"green",fontWeight:"bolder",background:"black"}} >Rezerve</span>
                <br />
                <span>Bahtiyar Karakoç</span>
                <br />
                <span>Saat</span>
                <br />
                <span>16.00-17.00</span>
                </div>
                </Html>
            </primitive> 
           : <primitive object={deskObjNormal} scale={0.05} dispose={null}/>   
    }
   
    {/* <primitive object={deskObjNormal} scale={0.05} dispose={null}/>     */}


    </mesh>
    
    );
};



