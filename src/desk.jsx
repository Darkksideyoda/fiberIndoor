import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react';
import { Environment, OrbitControls,Sky } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from "three";
import { DDSLoader } from "three-stdlib";
import { MTLLoader } from 'three/examples/jsm/loaders/mtlloader';
import { AmbientLight } from 'three';
import Desk from "./office_components/hotDesk3D";
import Floor from "./office_components/indoorFloor3D";
import { Physics } from "@react-three/cannon";
import Office from './office_components/officeModel3D';
import WallWind from './office_components/windowWall3D';
import MeetinTable from './office_components/meetTable';
import Human from './office_components/officePersonel';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

export default function App(){
    return(
        <div className='App'>
                <Canvas>
                    <Suspense>

                        <OrbitControls/>

                        <ambientLight intensity={0.5} />


{/* <spotLight  target={200,10,-20} position={[10,10,1]} color={"red"} intensity={200}  angle={0.1} penumbra={1} castShadow  /> */}

<pointLight position={[20,10,-20]} />




                        
                        <Desk x={1} y={1} z={1} />
                    



                            <mesh  rotation={[Math.PI / 2, 1.58, 1.57]}  position={[-38.7,9.5,-0.6]}>
                                <WallWind wallScale={0.41} />
                            </mesh>





                            <mesh position={[-100,1,-90]}>
                            <Office  />
                            </mesh>


                                <Human></Human>



                            <Floor/>

                            <Sky
             distance={450000}
             sunPosition={[5, 1, 8]}
             inclination={0}
             azimuth={0.25}
         />
                    </Suspense>
                </Canvas>
        </div>
    );
}