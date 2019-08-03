import React, { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard"

export default function DataHandler (){
    const [pics, setPics] = useState([]);
    const [name, setName]= useState("false");
    
    useEffect(() =>{
        setPics([]);
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(result =>{
                console.log(result.data);
                setPics(result.data);
            })
            .catch(err=>{
                console.log(err);
            })

    },[]);
    
    return(
        <div>
            <DataCard pictures={pics} />
        </div>
    );
}
