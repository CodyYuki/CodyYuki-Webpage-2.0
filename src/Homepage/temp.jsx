//TEMP MEANS TEMPATURE NOT TEMPERARLY
const BASE_URL = 'https://api.open-meteo.com/v1/forecast?latitude=79.8&longitude=22.4&hourly=temperature_2m'
import { useState, useEffect } from "react";

function Temp(){

    const [temp, setTemp] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL}`)
        .then((res) => res.json())
        .then((data) => {
            setTemp(data.hourly.temperature_2m[0]);
        });

    }, []);

  




    return(
        <div style={{border: "1px solid red", width: "10%", height: "48px", position: "fixed", top:"0px", backgroundColor: "#373a40", margin:"0px 0px 0px 45%"}}>
            <p style={{textAlign: "center", fontSize:"30px", position:"relative", top:"-30px"}}>{temp}</p>
        </div>
    )
}

export default Temp