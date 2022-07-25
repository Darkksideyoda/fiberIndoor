import React from 'react'
import { Card, Text } from "@nextui-org/react";


import sun from "./lotties/sunny.json"
const City = ({city}) => {


  return (
   <div >
    <div>
     
        <Card isHoverable variant="bordered" css={{ mw: "400px" ,backgroundColor:"#012A32",borderColor:"grey" , marginTop:"30px"}}>
      <Card.Body>
        <Text css={{color:"red"}}>{city.main.temp} </Text>
        <hr />
        {/* <h1>{city.weather[0].icon}</h1> */}
       
    
      </Card.Body>
    </Card>
    </div>
   </div>

  );
};

export default City;