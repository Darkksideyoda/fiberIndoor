import { useEffect,useState } from "react";
import axios from "axios";
import City from "./City";
import { Input, Grid } from "@nextui-org/react";
import { useLottie } from "lottie-react";


function App(){
  const apiKey ="6ef994d2cdfe36f09508cf3396bcd0da";
  const[search,setSearch] = useState("");
  const [city,setCity] = useState();
  
  useEffect(() => {
    async function getApi(){
      try {
        
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`);
        console.log(response.data);
        setCity(response.data);
      } catch (error) {             
        console.error(error);
      }
    }
    getApi();
  },[search]);

  return (
  <div className="grid h-screen place-items-center">
    <div>
      {/*        
 <input onChange={(e)=> setSearch(e.target.value)} type="text" className="border"/>
      {city && <City city={city}/>} */}
 <Grid>
        <Input 
        onChange={(e)=> setSearch(e.target.value)}
         css={{width:"350px",Color:"red"}}
          shadow={true} 
          labelPlaceholder="Şehir Ya da İlçe Adı Giriniz " 
          status="warning" 
        />
         {city && <City city={city}/>}
      </Grid>
    </div>
  </div>
  );

}

export default App;