import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react"





export default function Human(props){
    let nameString;
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if(hovered == true){
            document.body.style.cursor = "pointer"
           
        }
        else{
            document.body.style.cursor = "auto"
           

        }
    }, [hovered])
    
    return (
        
        <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} scale={0.15} position={[-20,5,-10]}>
          <sphereBufferGeometry args={[5, 24, 24]} />
          <meshStandardMaterial color={"brown"} />
          {
            hovered?<Html><span>Human</span></Html>:<Html><span>{nameString}</span></Html>
          }
         
        </mesh>
      );
};