import React, { useState, useEffect }from "react";

export default function DataCard(props){


    return(
        <div>
            <h1>{props.pictures.title}</h1>
            <img src={props.pictures.url} />
            <h3>{props.pictures.explanation}</h3>

        </div>
    );
}